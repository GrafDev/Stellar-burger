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
import {usersReducer} from "./user-reducer";


describe('usersReducer', () => {
    const initialState = {
        form: null,
        error: '',
        isAuth: false,
        registerRequest: false,
        registerFailed: false,
        loginRequest: false,
        loginFailed: false,
        logoutRequest: false,
        logoutFailed: false,
        userRequest: false,
        userFailed: false,
        updateTokenRequest: false,
        updateTokenFailed: false,
        userGetRequest: false,
        userGetFailed: false
    };

    it('should return the initial state', () => {
        expect(usersReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle USER_SET_IS_AUTH', () => {
        const action = { type: USER_SET_IS_AUTH, payload: true };
        const expectedState = { ...initialState, isAuth: true };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_REGISTER_REQUEST', () => {
        const action = { type: USER_REGISTER_REQUEST };
        const expectedState = { ...initialState, registerRequest: true, registerFailed: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_REGISTER_SUCCESS', () => {
        const action = { type: USER_REGISTER_SUCCESS, form: 'form1' };
        const expectedState = { ...initialState, form: 'form1', isAuth: true, registerRequest: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_REGISTER_FAILED', () => {
        const action = { type: USER_REGISTER_FAILED };
        const expectedState = { ...initialState, registerFailed: true, registerRequest: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGIN_REQUEST', () => {
        const action = { type: USER_LOGIN_REQUEST };
        const expectedState = { ...initialState, loginRequest: true, loginFailed: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGIN_SUCCESS', () => {
        const action = { type: USER_LOGIN_SUCCESS, form: 'form1' };
        const expectedState = { ...initialState, form: 'form1', isAuth: true, loginRequest: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGIN_FAILED', () => {
        const action = { type: USER_LOGIN_FAILED };
        const expectedState = { ...initialState, loginRequest: false, loginFailed: true };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGOUT_REQUEST', () => {
        const action = { type: USER_LOGOUT_REQUEST };
        const expectedState = { ...initialState, logoutRequest: true, logoutFailed: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGOUT_SUCCESS', () => {
        const action = { type: USER_LOGOUT_SUCCESS };
        const expectedState = { ...initialState, logoutRequest: false, form: null };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_LOGOUT_FAILED', () => {
        const action = { type: USER_LOGOUT_FAILED };
        const expectedState = { ...initialState, logoutRequest: false, logoutFailed: true };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_GET_REQUEST', () => {
        const action = { type: USER_GET_REQUEST };
        const expectedState = { ...initialState, userGetRequest: true, userGetFailed: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_GET_SUCCESS', () => {
        const action = { type: USER_GET_SUCCESS, form: 'form1' };
        const expectedState = { ...initialState, form: 'form1', isAuth: true, userGetRequest: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_GET_FAILED', () => {
        const action = { type: USER_GET_FAILED };
        const expectedState = { ...initialState, userGetRequest: false, userGetFailed: true };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_REQUEST', () => {
        const action = { type: USER_UPDATE_REQUEST };
        const expectedState = { ...initialState, userRequest: true, userFailed: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_SUCCESS', () => {
        const action = { type: USER_UPDATE_SUCCESS, form: 'form1' };
        const expectedState = { ...initialState, form: 'form1', userFailed: false, userRequest: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_FAILED', () => {
        const action = { type: USER_UPDATE_FAILED };
        const expectedState = { ...initialState, userFailed: true, userRequest: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_TOKEN_REQUEST', () => {
        const action = { type: USER_UPDATE_TOKEN_REQUEST };
        const expectedState = { ...initialState, updateTokenRequest: true, updateTokenFailed: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_TOKEN_SUCCESS', () => {
        const action = { type: USER_UPDATE_TOKEN_SUCCESS };
        const expectedState = { ...initialState, updateTokenRequest: false, updateTokenFailed: false };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle USER_UPDATE_TOKEN_FAILED', () => {
        const action = { type: USER_UPDATE_TOKEN_FAILED };
        const expectedState = { ...initialState, updateTokenRequest: false, updateTokenFailed: true };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });
});









