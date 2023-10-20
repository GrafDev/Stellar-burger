import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILED,
    USER_SET_IS_AUTH,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILED,
    USER_GET_REQUEST,
    USER_GET_SUCCESS,
    USER_GET_FAILED,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILED,
    USER_UPDATE_TOKEN_REQUEST,
    USER_UPDATE_TOKEN_SUCCESS,
    USER_UPDATE_TOKEN_FAILED,
} from '../../types/constants-types/user-types';
import {initialUserState, usersReducer} from "./user-reducer";


describe('usersReducer', () => {


    it('should return the initial state', () => {
        expect(usersReducer(undefined, {})).toEqual(initialUserState);
    });

    it('should handle USER_SET_IS_AUTH', () => {
        const action = { type: USER_SET_IS_AUTH, payload: true };
        const expectedState = { ...initialUserState, isAuth: true };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_REGISTER_REQUEST', () => {
        const action = { type: USER_REGISTER_REQUEST };
        const expectedState = { ...initialUserState, registerRequest: true, registerFailed: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_REGISTER_SUCCESS', () => {
        const action = { type: USER_REGISTER_SUCCESS, form: 'form1' };
        const expectedState = { ...initialUserState, form: 'form1', isAuth: true, registerRequest: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_REGISTER_FAILED', () => {
        const action = { type: USER_REGISTER_FAILED };
        const expectedState = { ...initialUserState, registerFailed: true, registerRequest: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGIN_REQUEST', () => {
        const action = { type: USER_LOGIN_REQUEST };
        const expectedState = { ...initialUserState, loginRequest: true, loginFailed: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGIN_SUCCESS', () => {
        const action = { type: USER_LOGIN_SUCCESS, form: 'form1' };
        const expectedState = { ...initialUserState, form: 'form1', isAuth: true, loginRequest: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGIN_FAILED', () => {
        const action = { type: USER_LOGIN_FAILED };
        const expectedState = { ...initialUserState, loginRequest: false, loginFailed: true };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGOUT_REQUEST', () => {
        const action = { type: USER_LOGOUT_REQUEST };
        const expectedState = { ...initialUserState, logoutRequest: true, logoutFailed: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGOUT_SUCCESS', () => {
        const action = { type: USER_LOGOUT_SUCCESS };
        const expectedState = { ...initialUserState, logoutRequest: false, form: null };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGOUT_FAILED', () => {
        const action = { type: USER_LOGOUT_FAILED };
        const expectedState = { ...initialUserState, logoutRequest: false, logoutFailed: true };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_GET_REQUEST', () => {
        const action = { type: USER_GET_REQUEST };
        const expectedState = { ...initialUserState, userGetRequest: true, userGetFailed: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_GET_SUCCESS', () => {
        const action = { type: USER_GET_SUCCESS, form: 'form1' };
        const expectedState = { ...initialUserState, form: 'form1', isAuth: true, userGetRequest: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_GET_FAILED', () => {
        const action = { type: USER_GET_FAILED };
        const expectedState = { ...initialUserState, userGetRequest: false, userGetFailed: true };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_REQUEST', () => {
        const action = { type: USER_UPDATE_REQUEST };
        const expectedState = { ...initialUserState, userRequest: true, userFailed: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_SUCCESS', () => {
        const action = { type: USER_UPDATE_SUCCESS, form: 'form1' };
        const expectedState = { ...initialUserState, form: 'form1', userFailed: false, userRequest: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_FAILED', () => {
        const action = { type: USER_UPDATE_FAILED };
        const expectedState = { ...initialUserState, userFailed: true, userRequest: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_TOKEN_REQUEST', () => {
        const action = { type: USER_UPDATE_TOKEN_REQUEST };
        const expectedState = { ...initialUserState, updateTokenRequest: true, updateTokenFailed: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_TOKEN_SUCCESS', () => {
        const action = { type: USER_UPDATE_TOKEN_SUCCESS };
        const expectedState = { ...initialUserState, updateTokenRequest: false, updateTokenFailed: false };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_TOKEN_FAILED', () => {
        const action = { type: USER_UPDATE_TOKEN_FAILED };
        const expectedState = { ...initialUserState, updateTokenRequest: false, updateTokenFailed: true };
        expect(usersReducer(initialUserState, action)).toEqual(expectedState);
    });
});









