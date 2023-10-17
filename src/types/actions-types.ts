import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { TIngredientsActions } from '../redux/actions/ingredients-actions';
import { TOrderActions } from '../redux/actions/order-actions';
import { TresetPasswordActions } from '../redux/actions/reset-password-actions';
import { TUserActions } from '../redux/actions/user-actions';
import { TWsActions } from '../redux/actions/ws-actions';
import { TWsAuthActions } from '../redux/actions/ws-auth-actions';
import store from '../redux/store';

type TApplicationActions = TIngredientsActions | TOrderActions | TresetPasswordActions | TUserActions | TWsActions | TWsAuthActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;

