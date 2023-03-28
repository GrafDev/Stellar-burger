
import {initialIngredientsStore} from "../initial-stores";
import {GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS} from "../action/ingredients-action";



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
		case GET_INGREDIENTS_SUCCESS: {
			return {
				...state,
				// Запрос выполнился успешно, помещаем полученные данные в хранилище
				ingredients: action.ingredients,
				// Запрос закончил своё выполнение
				isLoading: false,
				hasError: false,
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