import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILED,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILED
} from '../../types/constants-types/reset-password-types';
import {passwordReducer} from "./reset-password-reducer";

describe('passwordReducer', () => {
    const initialState = {
        emailRequest: false,
        emailRequestFailed: false,
        resetPasswordRequest: false,
        resetPasswordRequestFailed: false,
        verification: false,
        err: ''
    };

    it('should return the initial state', () => {
        expect(passwordReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FORGOT_PASSWORD_REQUEST', () => {
        const action = { type: FORGOT_PASSWORD_REQUEST };
        const expectedState = { ...initialState, emailRequest: true, emailRequestFailed: false, err: '' };
        expect(passwordReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle FORGOT_PASSWORD_SUCCESS', () => {
        const action = { type: FORGOT_PASSWORD_SUCCESS, payload: { success: true } };
        const expectedState = { ...initialState, emailRequest: false, verification: true };
        expect(passwordReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle FORGOT_PASSWORD_FAILED', () => {
        const action = { type: FORGOT_PASSWORD_FAILED };
        const expectedState = { ...initialState, emailRequest: false, emailRequestFailed: true };
        expect(passwordReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle RESET_PASSWORD_REQUEST', () => {
        const action = { type: RESET_PASSWORD_REQUEST };
        const expectedState = { ...initialState, resetPasswordRequest: true };
        expect(passwordReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle RESET_PASSWORD_SUCCESS', () => {
        const action = { type: RESET_PASSWORD_SUCCESS };
        const expectedState = { ...initialState, resetPasswordRequest: false, resetPasswordRequestFailed: false, verification: false };
        expect(passwordReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle RESET_PASSWORD_FAILED', () => {
        const action = { type: RESET_PASSWORD_FAILED };
        const expectedState = { ...initialState, resetPasswordRequest: false, resetPasswordRequestFailed: true };
        expect(passwordReducer(initialState, action)).toEqual(expectedState);
    });
});
