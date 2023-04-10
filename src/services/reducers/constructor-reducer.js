import {initialConstructorStore} from "../initial-stores";
import {
	DECREASE_CONSTRUCTOR_INGREDIENTS, DELETE_CONSTRUCTOR_INGREDIENTS,
	INCREASE_CONSTRUCTOR_INGREDIENTS, LOAD_CONSTRUCTOR_INGREDIENTS
} from "../action/constructor-ingredients-action";
import {v4 as uuidv4} from 'uuid';


export const constructorReducer = (state = initialConstructorStore, action) => {
	switch (action.type) {
		case INCREASE_CONSTRUCTOR_INGREDIENTS: {
			let item = action.payload;
			if (action.payload.type === 'bun')
				return {
					...state,
					constructorIngredients:{ ...state.constructorIngredients,
						bun: item,
					}
				}
			else
			return {
				...state,
				constructorIngredients:{ ...state.constructorIngredients,
					pieces:[...state.constructorIngredients.pieces, {...item,
					_id:uuidv4(),
					}]
			}

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
			console.log(action.payload, 'loadCons')
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
