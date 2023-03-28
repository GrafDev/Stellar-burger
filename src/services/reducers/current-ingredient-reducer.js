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
				ingredient: action.cart
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
				ingredient:''
			}
		}
		default: {
			return state;
		}
	}
};