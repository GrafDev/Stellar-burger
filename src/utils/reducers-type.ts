import {IOrderType, ITypeIngredient} from "../types/ingredients-types";

export type TIngredientsState = {
    ingredients: Array<ITypeIngredient>,
    loaded: boolean,
    error: boolean,
    selectedIngredient: ITypeIngredient | null
}

export type TOrderState = {
    list: Array<ITypeIngredient>,
    bun: ITypeIngredient | undefined,
    orderDetails: number | undefined,
    request: boolean,
    failed: boolean,
    isLoaded: boolean
}

export type tResetPass = {
    emailRequest: boolean,
    emailRequestFailed: boolean,
    resetPasswordRequest: boolean,
    resetPasswordRequestFailed: boolean,
    verification: boolean,
    err: string
}
export type TUserState = {
    form: { name?: string , email?: string, password?: string } | null,
    error: string,
    isAuth: boolean,
    registerRequest: boolean,
    registerFailed: boolean
    loginRequest: boolean
    loginFailed: boolean
    logoutRequest: boolean
    logoutFailed: boolean
    userRequest: boolean
    userFailed: boolean
    updateTokenRequest: boolean
    updateTokenFailed: boolean
    userGetRequest: boolean
    userGetFailed: boolean
}

export type TWsAuthState = {
    wsAuthConnected: boolean,
    wsAuthError: string,
    authOrders: Array<IOrderType> | null,
}

export type TWsState = {
    wsConnected: boolean,
    wsError: string,
    orders: Array<IOrderType>,
    total: number,
    totalToday: number
}