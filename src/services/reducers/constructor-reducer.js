import {initialConstructorStore} from "../initial-stores";
import {
	DECREASE_CONSTRUCTOR_INGREDIENTS, DELETE_CONSTRUCTOR_INGREDIENTS,
	INCREASE_CONSTRUCTOR_INGREDIENTS, LOAD_CONSTRUCTOR_INGREDIENTS
} from "../action/constructor-ingredients-action";

export const constructorReducer = (state = initialConstructorStore, action) => {
	switch (action.type) {
		case INCREASE_CONSTRUCTOR_INGREDIENTS: {
			state.constructorIngredients.push(action.payload)
			return {
				...state,
			}
		}
		case DECREASE_CONSTRUCTOR_INGREDIENTS: {
			state.constructorIngredients.push(action.payload)
			return {
				...state,
			}
		}
		case DELETE_CONSTRUCTOR_INGREDIENTS: {
			return state;
		}
		case LOAD_CONSTRUCTOR_INGREDIENTS: {
			console.log(action.payload,'loadCons')
			return {
				...state,
				constructorIngredients: action.payload,
			}
		}

		default: {
			return state;
		}
	}
};
