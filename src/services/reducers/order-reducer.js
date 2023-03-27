import {initialOrderStore} from "../initial-stores";
import {DESET_MODAL_ORDER, SET_MODAL_ORDER, SET_ORDER_ID} from "../action/oreder-action";
import {getRandomInt} from "../../utils/random-funcs";

export const orderReducer = (state = initialOrderStore, action) => {
	switch (action.type) {
		case SET_ORDER_ID: {
			return {
				...state,
				id: getRandomInt(6000)
			}
		}
		case SET_MODAL_ORDER: {
			return {
				...state,
				isModalOrder: true,
			}

		}
		case DESET_MODAL_ORDER: {
			return {
				...state,
				isModalOrder: false,
			}

		}
		default: {
			return state;
		}
	}
};