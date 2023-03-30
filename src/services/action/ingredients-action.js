import {getData} from "../../utils/data-api";

export const GET_INGREDIENTS= 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED= 'GET_INGREDIENTS_FAILED';
export const LOAD_INGREDIENTS_SUCCESS = 'LOAD_INGREDIENTS_SUCCESS';
export const LOAD_INGREDIENTS_REQUEST = 'LOAD_INGREDIENTS_REQUEST';
export const LOAD_INGREDIENTS_ERROR = 'LOAD_INGREDIENTS_ERROR';

export const loadIngredients=(payload)=> (dispatch)=>{
	dispatch({
		type:LOAD_INGREDIENTS_REQUEST,
		payload:true,
	});
	return getData().then((res)=>{
		console.log(payload,'-action payload')
		dispatch({
			type: LOAD_INGREDIENTS_SUCCESS,
			payload:res,
		}).catch(err=>{
			dispatch({
				type: LOAD_INGREDIENTS_ERROR,
				payload:err.message,
			})
		})
	})
}
// export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
// export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';
//
//
// export function getItems() {
// 	return function(dispatch) {
// 		dispatch({
// 			type: GET_ITEMS_REQUEST
// 		});
// 		getItemsRequest().then(res => {
// 			if (res && res.success) {
// 				dispatch({
// 					type: GET_ITEMS_SUCCESS,
// 					items: res.data
// 				});
// 			} else {
// 				dispatch({
// 					type: GET_ITEMS_FAILED
// 				});
// 			}
// 		});
// 	};
//
// }

