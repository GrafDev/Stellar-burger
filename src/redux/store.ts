import {legacy_createStore as createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from "redux-thunk";
import {wsMiddleware} from './middleware/ws-middleware';

import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    WS_AUTH_CONNECTION_START,
    WS_AUTH_CONNECTION_SUCCESS,
    WS_AUTH_CONNECTION_ERROR,
    WS_AUTH_CONNECTION_CLOSED,
    WS_GET_AUTH_ORDERS,
    WS_AUTH_CONNECTION_OFFLINE,
    WS_CONNECTION_OFFLINE
} from "../types/constants-types/ws-types";
import {ingredientsReducer} from "./reducers/ingredients-reducer";
import {orderReducer} from "./reducers/order-reducer";
import {usersReducer} from "./reducers/user-reducer";
import {passwordReducer} from "./reducers/reset-password-reducer";
import {wsReducer} from "./reducers/ws-reducer";
import {wsAuthReducer} from "./reducers/ws-auth-reducer";

const wsActions = {
    wsStart: WS_CONNECTION_START,
    wsClose: WS_CONNECTION_OFFLINE,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    getOrders: WS_GET_ORDERS
};

const wsAuthActions = {
    wsStart: WS_AUTH_CONNECTION_START,
    wsClose: WS_AUTH_CONNECTION_OFFLINE,
    onOpen: WS_AUTH_CONNECTION_SUCCESS,
    onClose: WS_AUTH_CONNECTION_CLOSED,
    onError: WS_AUTH_CONNECTION_ERROR,
    getOrders: WS_GET_AUTH_ORDERS
};


 const Reducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    user: usersReducer,
    password: passwordReducer,
    wsOrders: wsReducer,
    wsAuthOrders: wsAuthReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, wsMiddleware(wsActions, false), wsMiddleware(wsAuthActions, true)));
const store = createStore(Reducer, enhancer);

export default store;