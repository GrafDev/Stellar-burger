import PropTypes from "prop-types";


export const typeCart = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
}

export type TTypeIngredient ='bun' | 'sauce' | 'main'
export type TTypeBun = 'top' | 'bottom'

export interface ICart {
    _id: string
    name: string
    type: TTypeIngredient
    proteins: number
    fat: number
    carbohydrates: number
    calories: number
    price: number
    image: string
    image_mobile: string
    image_large: string
    __v: number
}

export interface IConstructorCart extends ICart {
    constructorId: string
}

export type TBun= ICart | null
export type TPieces= ICart[]

export interface IConstructorIngredients {
    pieces: TPieces
    bun: TBun
}

export interface IConstructorState {
    ingredients: IConstructorIngredients
    constructorIngredientsRequest: boolean
    constructorIngredientsFailed: boolean
}