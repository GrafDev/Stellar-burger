import { TIngredientsActions } from '../actions/ingredients-actions'
import { ITypeIngredient } from '../../types/ingredients-types'
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  SET_SELECTED_INGREDIENT,
  REMOVE_SELECTED_INGREDIENT
} from '../../types/constants-types/ingredients-types'
import {TIngredientsState} from "../../utils/reducers-type";


export const initialIngredientsState: TIngredientsState = {
  ingredients: [],
  loaded: false,
  error: false,
  selectedIngredient: null,
};

export const ingredientsReducer = (state = initialIngredientsState, action: TIngredientsActions): TIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        loaded: true,
      }
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        loaded: false,
        ingredients: action.ingredients, 
      }
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true,
      }
    case SET_SELECTED_INGREDIENT:
      return {
        ...state,
        error: false,
        selectedIngredient: action.ingredients
      }
    case REMOVE_SELECTED_INGREDIENT:
      return {
        ...state,
        selectedIngredient: null
      }
    default: {
      return state;
    }
  }
}