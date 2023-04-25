import {createSlice} from "@reduxjs/toolkit";
import {v4} from "uuid";


const initialState = {
	ingredients: {
		pieces: [],
		bun: null,
	},
	constructorIngredientsRequest: false,
	constructorIngredientsFailed: false,
}


const constructorSlice = createSlice({
	name: 'constructor',
	initialState,
	reducers: {
		increaseConstructor: (state, action) => {
			if (action.payload.type === 'bun') {
				state.ingredients.bun = action.payload
			} else {
				let _constructorIngredient = {
					...action.payload,
					constructorId: v4()
				}
				console.log(_constructorIngredient)
				console.log(state.ingredients.pieces)
				state.ingredients.pieces = [
					...state.ingredients.pieces,
					_constructorIngredient
				];
			}
		},
		decreaseConstructor: (state, action) => {
			state.ingredients.pieces = state.ingredients.pieces.filter(item => item.constructorId !== action.payload)
		},

	},

})


export const {increaseConstructor, decreaseConstructor} = constructorSlice.actions
export default constructorSlice.reducer

