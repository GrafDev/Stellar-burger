import {createSlice, Slice} from "@reduxjs/toolkit";
import {ICart} from "../../../utils/data-Types";


type TInitialState={
	ingredient: ICart | null,
	isModalIngredient: boolean,
}

const initialState:TInitialState = {
	ingredient: null,
	isModalIngredient: false,
}

export const currentIngredientSlice:any= createSlice({
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