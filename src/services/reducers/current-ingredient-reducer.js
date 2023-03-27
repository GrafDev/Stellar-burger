import {
	DESET_CURRENT_INGREDIENT, DESET_MODAL_CURRENT_INGREDIENT,
	SET_CURRENT_INGREDIENT,
	SET_MODAL_CURRENT_INGREDIENT
} from "../action/current-ingredient-action";
import {initialCurrentIngredientStore} from "../initial-stores";

export const currentIngredientReducer = (state = initialCurrentIngredientStore, action) => {
	switch (action.type) {
	 	case SET_CURRENT_INGREDIENT: {
	return {
		...state,
		ingredient: action.payload
	}
		}
	 	case DESET_CURRENT_INGREDIENT: {
			 return{
				 ...state,
				 ingredient: ''			 }
	 	}
		case SET_MODAL_CURRENT_INGREDIENT: {
			return {
				...state,
				isModalIngredient: true,
			}
		}
		case DESET_MODAL_CURRENT_INGREDIENT:{
			return{
				...state,
				isModalIngredient: false
			}
		}
	 	default: {
	 		return state;	 	}
	}
};