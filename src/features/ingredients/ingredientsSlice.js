import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const DATA_URL = 'https://norma.nomoreparties.space/api/ingredients';

const initialState = {
	ingredients: [],
	hasError: false,
	isLoading: true,
}




export const getToolIngredients = createAsyncThunk(
	'ingredients/getToolIngredients',
	async (_, {rejectedWithValue, dispatch}) => {
		const res = await axios.get(DATA_URL)
		dispatch(setToolIngredients(res.data.data))
	}
)

const ingredientsSlice = createSlice({
	name: 'ingredients',
	initialState,
	reducers: {
		setToolIngredients: (state, action) => {
			state.ingredients = action.payload
		},
	},
	extraReducers: {
		[getToolIngredients.pending]: () => console.log('getIngredients: pending'),
		[getToolIngredients.fulfilled]: (state) => {
			state.hasError=false;
			state.isLoading=false;
		},
		[getToolIngredients.rejected]: () => console.log('getIngredients: rejected'),
	}
})


export const {setToolIngredients}=ingredientsSlice.actions
export default ingredientsSlice.reducer

