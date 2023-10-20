import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    WS_CONNECTION_OFFLINE,
} from '../../types/constants-types/ws-types';
import {initialWSState, wsReducer} from "./ws-reducer";

describe('wsReducer', () => {


    it('should return the initial state', () => {
        expect(wsReducer(undefined, {})).toEqual(initialWSState);
    });

    it('should handle WS_CONNECTION_SUCCESS', () => {
        const action = { type: WS_CONNECTION_SUCCESS };
        const expectedState = { ...initialWSState, wsError: '', wsConnected: true };
        expect(wsReducer(initialWSState, action)).toEqual(expectedState);
    });

    it('should handle WS_CONNECTION_ERROR', () => {
        const action = { type: WS_CONNECTION_ERROR, payload: 'error message' };
        const expectedState = { ...initialWSState, wsError: 'error message', wsConnected: false };
        expect(wsReducer(initialWSState, action)).toEqual(expectedState);
    });

    it('should handle WS_CONNECTION_CLOSED', () => {
        const action = { type: WS_CONNECTION_CLOSED };
        const expectedState = { ...initialWSState, wsError: '', wsConnected: false, orders: [] };
        expect(wsReducer(initialWSState, action)).toEqual(expectedState);
    });

    it('should handle WS_CONNECTION_OFFLINE', () => {
        const action = { type: WS_CONNECTION_OFFLINE };
        const expectedState = { ...initialWSState, wsConnected: false };
        expect(wsReducer(initialWSState, action)).toEqual(expectedState);
    });

    it('should handle WS_GET_ORDERS', () => {
        const action = { type: WS_GET_ORDERS, payload: { orders: ['order1', 'order2'], total: 2, totalToday: 1 } };
        const expectedState = { ...initialWSState, wsError: '', orders: ['order1', 'order2'], total: 2, totalToday: 1 };
        expect(wsReducer(initialWSState, action)).toEqual(expectedState);
    });
});

