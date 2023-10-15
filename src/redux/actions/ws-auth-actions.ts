import {
    WS_AUTH_CONNECTION_START,
    WS_AUTH_CONNECTION_SUCCESS,
    WS_AUTH_CONNECTION_ERROR,
    WS_AUTH_CONNECTION_CLOSED,
    WS_GET_AUTH_ORDERS,
    WS_AUTH_CONNECTION_OFFLINE
} from '../../types/constants-types/ws-types';
import {IOrderType} from '../../types/ingredients-types';

interface IWsGetOrder {
    orders: Array<IOrderType>
    success: boolean;
}

export interface IWsAuthConnectionStart {
    readonly type: typeof WS_AUTH_CONNECTION_START,
    payload: string;
};

export interface IWsAuthConnectionSuccess {
    readonly type: typeof WS_AUTH_CONNECTION_SUCCESS,
};

export interface IWsAuthConnectionError {
    readonly type: typeof WS_AUTH_CONNECTION_ERROR,
    payload: string
};

export interface IWsAuthConnectionClosed {
    readonly type: typeof WS_AUTH_CONNECTION_CLOSED,
};

export interface IWsAuthConnectionOffline {
    readonly type: typeof WS_AUTH_CONNECTION_OFFLINE,
};

export interface IWsAuthGetOrders {
    readonly type: typeof WS_GET_AUTH_ORDERS,
    payload: IWsGetOrder
};

export type TWsAuthActions =
    IWsAuthConnectionStart
    | IWsAuthConnectionOffline
    | IWsAuthConnectionSuccess
    | IWsAuthConnectionError
    | IWsAuthConnectionClosed
    | IWsAuthGetOrders;

export const wsAuthConnectionStart = (wss: string): IWsAuthConnectionStart => ({
    type: WS_AUTH_CONNECTION_START,
    payload: wss
})
export const wsAuthConnectionSuccess = (): IWsAuthConnectionSuccess => ({type: WS_AUTH_CONNECTION_SUCCESS})
export const wsAuthConnectionOffline = (): IWsAuthConnectionOffline => ({type: WS_AUTH_CONNECTION_OFFLINE})
export const wsAuthConnectionClosed = (): IWsAuthConnectionClosed => ({type: WS_AUTH_CONNECTION_CLOSED});
export const wsAuthConnectionError = (error: string): IWsAuthConnectionError => ({
    type: WS_AUTH_CONNECTION_ERROR,
    payload: error
});
export const wsAuthGetOrders = (data: IWsGetOrder): IWsAuthGetOrders => ({type: WS_GET_AUTH_ORDERS, payload: data});