import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    WS_CONNECTION_OFFLINE,
} from '../../types/constants-types/ws-types';
import {wsReducer} from "./ws-reducer";

describe('wsReducer', () => {
    const initialState = {
        wsConnected: false,
        wsError: '',
        orders: [],
        total: 0,
        totalToday: 0
    };

    it('should return the initial state', () => {
        expect(wsReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle WS_CONNECTION_SUCCESS', () => {
        const action = { type: WS_CONNECTION_SUCCESS };
        const expectedState = { ...initialState, wsError: '', wsConnected: true };
        expect(wsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_CONNECTION_ERROR', () => {
        const action = { type: WS_CONNECTION_ERROR, payload: 'error message' };
        const expectedState = { ...initialState, wsError: 'error message', wsConnected: false };
        expect(wsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_CONNECTION_CLOSED', () => {
        const action = { type: WS_CONNECTION_CLOSED };
        const expectedState = { ...initialState, wsError: '', wsConnected: false, orders: [] };
        expect(wsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_CONNECTION_OFFLINE', () => {
        const action = { type: WS_CONNECTION_OFFLINE };
        const expectedState = { ...initialState, wsConnected: false };
        expect(wsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_GET_ORDERS', () => {
        const action = { type: WS_GET_ORDERS, payload: { orders: ['order1', 'order2'], total: 2, totalToday: 1 } };
        const expectedState = { ...initialState, wsError: '', orders: ['order1', 'order2'], total: 2, totalToday: 1 };
        expect(wsReducer(initialState, action)).toEqual(expectedState);
    });
});

