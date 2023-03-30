import {
	DESET_MODAL_CURRENT_INGREDIENT,
	SET_CURRENT_INGREDIENT,
	SET_MODAL_CURRENT_INGREDIENT
} from "../action/current-ingredient-action";
import {initialCurrentIngredientStore} from "../initial-stores";

export const currentIngredientReducer = (state = initialCurrentIngredientStore, action) => {
	switch (action.type) {
		case SET_CURRENT_INGREDIENT: {
			return {
				...state,
				currentIngredient: action.payload
			}
		}
		case SET_MODAL_CURRENT_INGREDIENT: {
			return {
				...state,
				isModalIngredient: true,
			}
		}
		case DESET_MODAL_CURRENT_INGREDIENT: {
			return {
				...state,
				isModalIngredient: false,
				currentIngredient:''
			}
		}
		default: {
			return state;
		}
	}
};