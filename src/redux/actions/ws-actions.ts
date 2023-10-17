import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    WS_CONNECTION_OFFLINE
} from '../../types/constants-types/ws-types';
import {IOrderType} from '../../types/ingredients-types';

interface IWsGetOrder {
    orders: Array<IOrderType>
    success: boolean;
    total: number;
    totalToday: number;
}

export interface IWsConnectionStart {
    readonly type: typeof WS_CONNECTION_START,
    readonly payload: string;
};

export interface IWsConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS,
};

export interface IWsConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR,
    readonly payload: string;
};

export interface IWsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED,
};

export interface IWsConnectionOffline {
    readonly type: typeof WS_CONNECTION_OFFLINE,
};

export interface IWsGetOrders {
    readonly type: typeof WS_GET_ORDERS,
    readonly payload: IWsGetOrder
};

export type TWsActions =
    IWsConnectionStart
    | IWsConnectionOffline
    | IWsConnectionSuccess
    | IWsConnectionError
    | IWsConnectionClosed
    | IWsGetOrders;

export const wsConnectionStart = (wss: string): IWsConnectionStart => ({type: WS_CONNECTION_START, payload: wss})
export const wsConnectionSuccess = (): IWsConnectionSuccess => ({type: WS_CONNECTION_SUCCESS})
export const wsConnectionOffline = (): IWsConnectionOffline => ({type: WS_CONNECTION_OFFLINE})
export const wsConnectionClosed = (): IWsConnectionClosed => ({type: WS_CONNECTION_CLOSED});
export const wsConnectionError = (error: string): IWsConnectionError => ({type: WS_CONNECTION_ERROR, payload: error});
export const wsGetOrders = (data: IWsGetOrder): IWsGetOrders => ({type: WS_GET_ORDERS, payload: data});
