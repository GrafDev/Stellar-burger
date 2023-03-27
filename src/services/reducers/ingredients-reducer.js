import {DECREASE_INGREDIENT, INCREASE_INGREDIENT} from "../action/ingredients-action";
import {initialIngredientsStore} from "../initial-stores";

export const ingredientsReducer = (state = initialIngredientsStore, action) => {
	switch (action.type) {
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