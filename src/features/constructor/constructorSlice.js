import {createSlice} from "@reduxjs/toolkit";
import {v4} from "uuid";


const initialState = {
	constructorIngredients: {
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
				state.constructorIngredients.bun = action.payload
			} else {
				let _constructorIngredient = {
					...action.payload,
					constructorId: v4()
				}
				console.log(_constructorIngredient)
				console.log(state.constructorIngredients.pieces)
				state.constructorIngredients.pieces = [
					...state.constructorIngredients.pieces,
					_constructorIngredient
				];
			}
		},
		decreaseConstructor: (state, action) => {
			state.constructorIngredients.pieces = state.constructorIngredients.pieces.filter(item => item.constructorId !== action.payload)
		},

	},

})


export const {increaseConstructor, decreaseConstructor} = constructorSlice.actions
export default constructorSlice.reducer

