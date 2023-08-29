import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {DATA_URL} from "../../../utils/constants/outlink-constants";


const initialState = {
	ingredients: [],
	hasError: false,
	isLoading: true,
}




export const getIngredients = createAsyncThunk(
	'ingredients/getIngredients',
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
	extraReducers: builder => {
		builder.addCase(getIngredients.pending, () => console.log('getIngredients: pending'))
		.addCase(getIngredients.fulfilled, (state) => {
			state.hasError=false;
			state.isLoading=false;
			console.log('getIngredients: fulfilled')
		})
			.addCase(getIngredients.rejected, () => console.log('getIngredients: rejected'))
			.addDefaultCase(()=>{})
	}

})


export const {setToolIngredients}=ingredientsSlice.actions
export default ingredientsSlice.reducer

