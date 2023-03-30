
import {initialIngredientsStore} from "../initial-stores";
import {
	GET_INGREDIENTS,
	GET_INGREDIENTS_FAILED, LOAD_INGREDIENTS_ERROR,
	LOAD_INGREDIENTS_REQUEST,
	LOAD_INGREDIENTS_SUCCESS
} from "../action/ingredients-action";

function addCount(data){
	console.log('Count added')
	return data.data.map(elem =>{
		elem.count=0
		return elem
	})
}

export const ingredientsReducer = (state = initialIngredientsStore, action) => {
	switch (action.type) {
		case GET_INGREDIENTS: {
			return {
				...state,
				// Запрос начал выполняться
				isLoading: true,
				// Сбрасываем статус наличия ошибок от предыдущего запроса
				// на случай, если он был и завершился с ошибкой
				hasError: false,
			};
		}
		case LOAD_INGREDIENTS_REQUEST: {
			console.log(action.payload,'-request ')
			return {
				...state,
  				isLoading: true,
				hasError: false,
			};
		}
		case LOAD_INGREDIENTS_SUCCESS: {
			console.log(action.payload,'-load')
			return {
				...state,
				isLoading: false,
				hasError: false,
				ingredients: addCount(action.payload),
			};
		}
		case LOAD_INGREDIENTS_ERROR: {
			console.log(action.payload,'-request ')
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		}
		case GET_INGREDIENTS_FAILED: {
			return {
				...state,
				// Запрос выполнился с ошибкой,
				// выставляем соответсвующие значения в хранилище
				isLoading: false,
				// Запрос закончил своё выполнение
				hasError: true,
			};
		}
		default: {
			return state
		}
	}
}