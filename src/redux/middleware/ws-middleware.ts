import {getCookie} from "../../utils/cookies";
import {Middleware} from "redux";

interface IWebSocket {
    wsStart: string;
    onOpen: string;
    onError: string;
    onClose: string;
    getOrders: string
}

export const wsMiddleware = (wsActions: IWebSocket, auth: boolean): Middleware => {

    return store => {
        let socket: WebSocket | null = null;

        return next => action => {
            const {dispatch} = store;
            const {type, payload} = action;
            const {wsStart, onOpen, onClose, onError, getOrders} = wsActions;

            if (type === wsStart) {
                socket = (!auth)
                    ? new WebSocket(payload)
                    : new WebSocket(`${payload}?token=${getCookie("accessToken")}`)
            }
            if (type === onClose) {
                socket?.close(1000, "Соединение закрыто клиентом");
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


// export const wsMiddleware= (url: () => string, actions: IWebSocket): Middleware => {
//   return (store) => {
//     let socket: WebSocket | null = null;
//     return (next) => {
//       return (action) => {
//         const { dispatch } = store;
//         const { type } = action;
//         const { wsStart, onOpen, onClose, onError, getOrders } = actions;
//         if (type === wsStart) {
//           socket = new WebSocket(url());
//           if (socket) {
//             socket.onopen = () => {
//               dispatch({ type: onOpen });
//             };
//             socket.onerror = () => {
//               dispatch({ type: onError });
//             };
//             socket.onmessage = (evt) => {
//               const { data } = evt;
//               const parsedData = JSON.parse(data);
//               const { success } = parsedData;
//               success && dispatch({ type: getOrders, payload: parsedData });
//             };
//             socket.onclose = () => {
//               dispatch({ type: onClose });
//             }
//           }
//         }
//         return next(action)
//       }
//     }
//   }
// }
