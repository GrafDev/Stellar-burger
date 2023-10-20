import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILED,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILED
} from '../../types/constants-types/reset-password-types';
import {initialResetState, passwordReducer} from "./reset-password-reducer";

describe('passwordReducer', () => {


    it('should return the initial state', () => {
        expect(passwordReducer(undefined, {})).toEqual(initialResetState);
    });

    it('should handle FORGOT_PASSWORD_REQUEST', () => {
        const action = { type: FORGOT_PASSWORD_REQUEST };
        const expectedState = { ...initialResetState, emailRequest: true, emailRequestFailed: false, err: '' };
        expect(passwordReducer(initialResetState, action)).toEqual(expectedState);
    });

    it('should handle FORGOT_PASSWORD_SUCCESS', () => {
        const action = { type: FORGOT_PASSWORD_SUCCESS, payload: { success: true } };
        const expectedState = { ...initialResetState, emailRequest: false, verification: true };
        expect(passwordReducer(initialResetState, action)).toEqual(expectedState);
    });

    it('should handle FORGOT_PASSWORD_FAILED', () => {
        const action = { type: FORGOT_PASSWORD_FAILED };
        const expectedState = { ...initialResetState, emailRequest: false, emailRequestFailed: true };
        expect(passwordReducer(initialResetState, action)).toEqual(expectedState);
    });

    it('should handle RESET_PASSWORD_REQUEST', () => {
        const action = { type: RESET_PASSWORD_REQUEST };
        const expectedState = { ...initialResetState, resetPasswordRequest: true };
        expect(passwordReducer(initialResetState, action)).toEqual(expectedState);
    });

    it('should handle RESET_PASSWORD_SUCCESS', () => {
        const action = { type: RESET_PASSWORD_SUCCESS };
        const expectedState = { ...initialResetState, resetPasswordRequest: false, resetPasswordRequestFailed: false, verification: false };
        expect(passwordReducer(initialResetState, action)).toEqual(expectedState);
    });

    it('should handle RESET_PASSWORD_FAILED', () => {
        const action = { type: RESET_PASSWORD_FAILED };
        const expectedState = { ...initialResetState, resetPasswordRequest: false, resetPasswordRequestFailed: true };
        expect(passwordReducer(initialResetState, action)).toEqual(expectedState);
    });
});
