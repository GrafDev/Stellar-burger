import {getCookie} from "../../utils/cookies";
import {Middleware} from "redux";

interface IWebSocket {
    wsStart: string;
    wsClose:string;
    onOpen: string;
    onError: string;
    onClose: string;
    getOrders: string
}

export const wsMiddleware = (wsActions: IWebSocket,  auth: boolean): Middleware => {

    return store => {
        let socket: WebSocket | null = null;

        return next => action => {
            const {dispatch} = store;
            const {type, payload} = action;
            const {wsStart,wsClose, onOpen, onClose, onError, getOrders} = wsActions;

            if (type === wsStart) {
                socket = (!auth)
                    ? new WebSocket(payload)
                    : new WebSocket(`${payload}?token=${getCookie("accessToken")}`)
            }

            if (type === wsClose) {
                if (socket) {
                    socket.close(1000, `Соединение закрыто пользователем`)
                    socket = null;
                }
            }


            if (socket) {
                socket.onopen = event => {
                    dispatch({type: onOpen, payload: event});
                };

                socket.onerror = event => {
                    dispatch({type: onError, payload: event});
                };

                socket.onmessage = (event: MessageEvent<string>) => {
                    const {data} = event;
                    const parsedData = JSON.parse(data);
                    const {success, ...restParsedData} = parsedData;
                    dispatch({type: getOrders, payload: restParsedData});
                };

                socket.onclose = (event: CloseEvent) => {
                    dispatch({type: onClose, payload: event});
                };
            }
            next(action);
        };
    };
};

