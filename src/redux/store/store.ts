import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {webSocketMiddleware} from "../features/socket/websockets";
import {socketSlice} from "../features/socket/socketsSlice";
import {ingredientsSlice} from "../features/ingredients/ingredientsSlice";
import {constructorSlice} from "../features/constructor/constructorSlice";
import {currentIngredientSlice} from "../features/currentIngredient/currentIngredientSlice";
import {orderSlice} from "../features/order/orderSlice";
import {authSlice} from "../features/auth/authSlice";


const rootReducer = combineReducers({
    ingredientsStore: ingredientsSlice.reducer,
    constructorStore: constructorSlice.reducer,
    currentStore: currentIngredientSlice.reducer,
    orderStore: orderSlice.reducer,
    authStore: authSlice.reducer,
    socketSlice: socketSlice.reducer,

})

const stores = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(webSocketMiddleware(socketSlice.actions))
})

export default stores;

export type RootState = ReturnType<typeof stores.getState>
export type AppDispatch = typeof stores.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector