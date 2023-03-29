import {initialConstructorIngredientStore} from "../initial-stores";
import {
	DECREASE_CONSTRUCTOR_INGREDIENTS, DELETE_CONSTRUCTOR_INGREDIENTS,
	INCREASE_CONSTRUCTOR_INGREDIENTS
} from "../action/constructor-ingredients-action";

export const constructorIngredientsReducer = (state = initialConstructorIngredientStore, action) => {
	switch (action.type) {
		case INCREASE_CONSTRUCTOR_INGREDIENTS: {
			return {
		...state,
		}
		}
		case DECREASE_CONSTRUCTOR_INGREDIENTS: {
			return{
				...state,
			}
		}
		case DELETE_CONSTRUCTOR_INGREDIENTS: {
return state;
		}
		default: {
			return state;
		}
	}
};
