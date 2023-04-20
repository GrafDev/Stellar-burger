import {initialIngredientsStore} from "../initial-stores";
import {
	DECREASE_COUNT_INGREDIENT,
	GET_INGREDIENTS,
	GET_INGREDIENTS_FAILED,
	INCREASE_COUNT_INGREDIENT,
	LOAD_INGREDIENTS_ERROR,
	LOAD_INGREDIENTS_REQUEST,
	LOAD_INGREDIENTS_SUCCESS
} from "../action/ingredients-action";

function addCount(_data) {
	// console.log(_data,'Count added')

	return _data.map(elem => {
		elem.count = 0
		return elem
	})
}

function increaseCount(_store, _id) {
	// console.log('increaseCount', _store,_id)

	_store.map(elem => {
		if (elem._id === _id) elem.count++
	 })
	// console.log(_store)
	return _store
}

function decreaseCount(_store, _id) {
	console.log(_id)
	_store.map(elem => {
		console.log(elem._id)
	if (elem._id === _id ) elem.count--
	})
	console.log(_store.filter(elem=>(elem._id === _id)))
	return _store
}

export const ingredientsReducer = (state = initialIngredientsStore, action) => {
	switch (action.type) {

		case INCREASE_COUNT_INGREDIENT: {
			// console.log('increase', state.ingredients.map(elem => elem.count))

			return {
				...state,
				ingredients: increaseCount(state.ingredients, action.payload)
			};
		}

		case DECREASE_COUNT_INGREDIENT: {
			return {
				...state,
				ingredients: decreaseCount(state.ingredients, action.payload)
			};
		}

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
			let _data = action.payload.data
			// console.log(_data)
			return {
				...state,
				isLoading: false,
				hasError: false,
				ingredients: addCount(_data),
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