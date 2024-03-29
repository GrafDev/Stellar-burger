import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
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
  USER_SET_IS_AUTH
} from '../../types/constants-types/user-types';
import { TUserActions } from '../actions/user-actions';
import {TUserState} from "../../utils/reducers-type";


export const initialUserState: TUserState = {
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

export const usersReducer = (state = initialUserState, action: TUserActions): TUserState => {

  switch (action.type) {
    case USER_SET_IS_AUTH: {
      return {
        ...state,
        isAuth: action.payload
      }
    }
    case USER_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false
      };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        form: action.form,
        isAuth: true,
        registerRequest: false,
      };
    }
    case USER_REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
        registerRequest: false
      }
    }

    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        form: action.form,
        loginRequest: false,
        loginFailed: false,
        isAuth: true,
      };
    }
    case USER_LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true
      };
    }

    case USER_LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      };
    }
    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
        form: null
      };
    }
    case USER_LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
      };
    }

    case USER_GET_REQUEST: {
      return {
        ...state,
        userGetRequest: true,
        userGetFailed: false
      };
    }
    case USER_GET_SUCCESS: {
      return {
        ...state,
        form: action.form,
        isAuth: true,
        userGetRequest: false,
      };
    }
    case USER_GET_FAILED: {
      return {
        ...state,
        userGetRequest: false,
        userGetFailed: true
      }
    }
    case USER_UPDATE_REQUEST: {
      return {
        ...state,
        userRequest: true,
        userFailed: false,
      };
    }
    case USER_UPDATE_SUCCESS: {
      return {
        ...state,
        form: action.form,
        userFailed: false,
        userRequest: false,
      };
    }
    case USER_UPDATE_FAILED: {
      return {
        ...state,
        userFailed: true,
        userRequest: false,
      };
    }

    case USER_UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        updateTokenRequest: true,
        updateTokenFailed: false,
      };
    }
    case USER_UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        updateTokenRequest: false,
        updateTokenFailed: false,
      };
    }
    case USER_UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        updateTokenRequest: false,
        updateTokenFailed: true,
      };
    }

    default:
      return state;
  }
}