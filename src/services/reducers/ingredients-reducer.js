
import {initialIngredientsStore} from "../initial-stores";
import {
	GET_INGREDIENTS,
	GET_INGREDIENTS_FAILED, LOAD_INGREDIENTS_ERROR,
	LOAD_INGREDIENTS_REQUEST,
	LOAD_INGREDIENTS_SUCCESS
} from "../action/ingredients-action";

function addCount(_data){
	console.log(_data,'Count added')

	return _data.map(elem =>{
		elem.count=0
		return elem
	})
}

export const ingredientsReducer = (state = initialIngredientsStore, action) => {
	switch (action.type) {
		case GET_INGREDIENTS: {
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		}
		case LOAD_INGREDIENTS_REQUEST: {
			return {
				...state,
  				isLoading: true,
				hasError: false,
			};
		}
		case LOAD_INGREDIENTS_SUCCESS: {
			let data=action.payload.data
			console.log(data)
			return {
				...state,
				isLoading: false,
				hasError: false,
				ingredients: addCount(data),
			};
		}
		case LOAD_INGREDIENTS_ERROR: {
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		}
		case GET_INGREDIENTS_FAILED: {
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		}
		default: {
			return state
		}
	}
}