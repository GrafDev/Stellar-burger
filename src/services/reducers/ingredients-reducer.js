import {
	DECREASE_INGREDIENT, GET_INGREDIENTS, GET_INGREDIENTS_ERROR,
	GET_INGREDIENTS_LOADING,
	INCREASE_INGREDIENT
} from "../action/ingredients-action";
import {initialIngredientsStore} from "../initial-stores";
// import {read} from "fs";
// import readData from "../../utils/read-data";

export const ingredientsReducer = (state = initialIngredientsStore, action) => {
	switch (action.type) {
		case GET_INGREDIENTS:{
			return{
				...state,
				data: action.payload,
				isLoading: false,
				hasError: false,
			}
		}
		case GET_INGREDIENTS_LOADING:{
			return {
				...state,
				hasError: false,
				isLoading: true,
			}
		}
		case GET_INGREDIENTS_ERROR:{
			return{
				...state,
				hasError: true,
				isLoading: false,
			}
		}
		case INCREASE_INGREDIENT: {
			return{
				...state,

			}
		}
		case DECREASE_INGREDIENT: {
			return {
				...state,
			}

		}
		default: {
			return state;
		}
	}
};