import {createSlice, Slice} from "@reduxjs/toolkit";
import {ICart} from "../../../utils/types";


type TInitialState={
	ingredient: ICart | null,
	isModalIngredient: boolean,
}

const initialState:TInitialState = {
	ingredient: null,
	isModalIngredient: false,
}

const currentIngredientSlice:Slice<TInitialState> = createSlice({
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