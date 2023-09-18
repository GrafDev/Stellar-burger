import {createSlice} from "@reduxjs/toolkit";
import {getRandomInt} from "../../../utils/random-funcs";
import {IConstructorIngredients} from "../../../utils/types";

type TInitialState={
	orderIngredients: IConstructorIngredients[],
	id: number,
	isModalOrder: boolean,
}

const initialState = {
	orderIngredients: [],
	id: 0,
	isModalOrder: false,
}

const orderSlice:any = createSlice({ //TODO: Разобраться с ANY
	name: 'order',
	initialState,
	reducers: {
		setToolOrder: (state,action) => {
			state.id = getRandomInt(6000)
			state.isModalOrder = true
		},
		unsetToolOrder: (state,action) => {
			state.id = 0;
			state.isModalOrder = false;
		}
	},
})

export const {setToolOrder,unsetToolOrder}=orderSlice.actions
export default orderSlice.reducer