import {getData} from "../../utils/data-api";

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const LOAD_INGREDIENTS_SUCCESS = 'LOAD_INGREDIENTS_SUCCESS';
export const LOAD_INGREDIENTS_REQUEST = 'LOAD_INGREDIENTS_REQUEST';
export const LOAD_INGREDIENTS_ERROR = 'LOAD_INGREDIENTS_ERROR';

export const loadIngredients = (payload) => (dispatch) => {
	dispatch({
		type: LOAD_INGREDIENTS_REQUEST,
		payload: true,
	});
	return getData().then((res) => {
		dispatch({
			type: LOAD_INGREDIENTS_SUCCESS,
			payload: res,
		})
	})
		.catch(err => {
				dispatch({
					type: LOAD_INGREDIENTS_ERROR,
					payload: err.message,
				})
			}
		)
}


