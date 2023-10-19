import {
    WS_AUTH_CONNECTION_SUCCESS,
    WS_AUTH_CONNECTION_ERROR,
    WS_AUTH_CONNECTION_CLOSED,
    WS_GET_AUTH_ORDERS, WS_AUTH_CONNECTION_OFFLINE
} from '../../types/constants-types/ws-types';
import {wsAuthReducer} from "./ws-auth-reducer";

describe('wsAuthReducer', () => {
    const initialState = {
        wsAuthConnected: false,
        wsAuthError: '',
        authOrders: null,
    };

    it('should return the initial state', () => {
        expect(wsAuthReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle WS_AUTH_CONNECTION_SUCCESS', () => {
        const action = { type: WS_AUTH_CONNECTION_SUCCESS };
        const expectedState = { ...initialState, wsAuthError: '', wsAuthConnected: true };
        expect(wsAuthReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_AUTH_CONNECTION_OFFLINE', () => {
        const action = { type: WS_AUTH_CONNECTION_OFFLINE };
        const expectedState = { ...initialState, wsAuthConnected: false };
        expect(wsAuthReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_AUTH_CONNECTION_ERROR', () => {
        const action = { type: WS_AUTH_CONNECTION_ERROR, payload: 'error message' };
        const expectedState = { ...initialState, wsAuthError: 'error message', wsAuthConnected: false };
        expect(wsAuthReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_AUTH_CONNECTION_CLOSED', () => {
        const action = { type: WS_AUTH_CONNECTION_CLOSED };
        const expectedState = { ...initialState, wsAuthError: '', wsAuthConnected: false, authOrders: null };
        expect(wsAuthReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle WS_GET_AUTH_ORDERS', () => {
        const action = { type: WS_GET_AUTH_ORDERS, payload: { orders: ['order1', 'order2'] } };
        const expectedState = { ...initialState, wsAuthError: '', authOrders: ['order1', 'order2'] };
        expect(wsAuthReducer(initialState, action)).toEqual(expectedState);
    });
});
