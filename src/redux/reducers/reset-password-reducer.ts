import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST
} from '../../types/constants-types/reset-password-types';
import { TresetPasswordActions } from '../actions/reset-password-actions';
import {tResetPass} from "../../utils/reducers-type";



export const initialResetState: tResetPass = {
  emailRequest: false,
  emailRequestFailed: false,
  resetPasswordRequest: false,
  resetPasswordRequestFailed: false,
  verification: false,
  err: ''
};

export const passwordReducer = (state = initialResetState, action: TresetPasswordActions): tResetPass => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        emailRequest: true,
        emailRequestFailed: false,
        err: ''
      }
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        emailRequest: false,
        verification: action.payload.success,
      }
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        emailRequest: false,
        emailRequestFailed: true,
      }
    }
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetPasswordRequest: true,
      }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordRequestFailed: false,
        verification: false
      }
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordRequestFailed: true,
      }
    default:
      return state;
  }
}

