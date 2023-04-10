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
					constructorIngredients: {
						...state.constructorIngredients,
						bun: item,
					}
				}
			else
				return {
					...state,
					constructorIngredients: {
						...state.constructorIngredients,
						pieces: [...state.constructorIngredients.pieces, {
							...item,
							_id: uuidv4(),
						}]
					}

				}
		}
		case DECREASE_CONSTRUCTOR_INGREDIENTS: {
			if (state.constructorIngredients) {
				const ingredients = [...state.constructorIngredients.pieces].filter(
					item => item._id !== action.payload)
				console.log(action.payload)
				console.log(ingredients)
				if (ingredients.length !== 0) {
					return {
						...state, constructorIngredients: {
							...state.constructorIngredients,
							pieces: ingredients
						}
					}
				} else {
					return {
						...state,
						constructorIngredients:
							{
								...state.constructorIngredients,
								pieces: []
							}
					}
				}
			}
		}


			default:
				{
					return state;
				}
			}
		}
			;
