import {ITypeIngredient} from "../types/ingredients-types";

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
