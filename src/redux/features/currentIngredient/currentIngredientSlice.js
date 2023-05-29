import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	ingredient: null,
	isModalIngredient: false,
}

const currentIngredientSlice = createSlice({
	name: 'current',
	initialState,
	reducers: {
		setToolCurrentIngredient: (state, action) => {
			state.ingredient = action.payload
			state.isModalIngredient = true
		},
		unsetCurrentIngredient:(state, action)=>{
			state.ingredient = null
			state.isModalIngredient = false
		}
	}
})

export const {setToolCurrentIngredient, unsetCurrentIngredient} = currentIngredientSlice.actions
export default currentIngredientSlice.reducer