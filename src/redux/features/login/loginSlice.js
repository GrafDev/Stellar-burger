import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const DATA_USERS_URL = 'https://norma.nomoreparties.space/api/ingredients';

const initialState = {
	user: {
		email: '',
		password: '',
		name: '',
	},
	hasError:false,
	isLoading:false,
}


export const getUsers = createAsyncThunk(
	'ingredients/getToolIngredients',
	async (_, {rejectedWithValue, dispatch}) => {
		const res = await axios.get(DATA_USERS_URL)
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
		builder.addCase(getUsers.pending, () => console.log('getIngredients: pending'))
			.addCase(getUsers.fulfilled, (state) => {
				state.hasError = false;
				state.isLoading = false;
			})
			.addCase(getUsers.rejected, () => console.log('getIngredients: rejected'))
			.addDefaultCase(() => {
			})
	}

})


export const {setToolIngredients} = ingredientsSlice.actions
export default ingredientsSlice.reducer

