import {
    WS_AUTH_CONNECTION_SUCCESS,
    WS_AUTH_CONNECTION_ERROR,
    WS_AUTH_CONNECTION_CLOSED,
    WS_GET_AUTH_ORDERS, WS_AUTH_CONNECTION_OFFLINE
} from '../../types/constants-types/ws-types';
import {initialWSAuthState, wsAuthReducer} from "./ws-auth-reducer";

describe('wsAuthReducer', () => {


    it('should return the initial state', () => {
        expect(wsAuthReducer(undefined, {})).toEqual(initialWSAuthState);
    });

    it('should handle WS_AUTH_CONNECTION_SUCCESS', () => {
        const action = { type: WS_AUTH_CONNECTION_SUCCESS };
        const expectedState = { ...initialWSAuthState, wsAuthError: '', wsAuthConnected: true };
        expect(wsAuthReducer(initialWSAuthState, action)).toEqual(expectedState);
    });

    it('should handle WS_AUTH_CONNECTION_OFFLINE', () => {
        const action = { type: WS_AUTH_CONNECTION_OFFLINE };
        const expectedState = { ...initialWSAuthState, wsAuthConnected: false };
        expect(wsAuthReducer(initialWSAuthState, action)).toEqual(expectedState);
    });

    it('should handle WS_AUTH_CONNECTION_ERROR', () => {
        const action = { type: WS_AUTH_CONNECTION_ERROR, payload: 'error message' };
        const expectedState = { ...initialWSAuthState, wsAuthError: 'error message', wsAuthConnected: false };
        expect(wsAuthReducer(initialWSAuthState, action)).toEqual(expectedState);
    });

    it('should handle WS_AUTH_CONNECTION_CLOSED', () => {
        const action = { type: WS_AUTH_CONNECTION_CLOSED };
        const expectedState = { ...initialWSAuthState, wsAuthError: '', wsAuthConnected: false, authOrders: null };
        expect(wsAuthReducer(initialWSAuthState, action)).toEqual(expectedState);
    });

    it('should handle WS_GET_AUTH_ORDERS', () => {
        const action = { type: WS_GET_AUTH_ORDERS, payload: { orders: ['order1', 'order2'] } };
        const expectedState = { ...initialWSAuthState, wsAuthError: '', authOrders: ['order1', 'order2'] };
        expect(wsAuthReducer(initialWSAuthState, action)).toEqual(expectedState);
    });
});
