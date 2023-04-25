import {createSlice} from "@reduxjs/toolkit";
import {getRandomInt} from "../../utils/random-funcs";


const initialState = {
	orderIngredients: [],
	id: 0,
	isModalOrder: false,
}

const orderSlice = createSlice({
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