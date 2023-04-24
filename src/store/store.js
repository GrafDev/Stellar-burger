import {configureStore} from "@reduxjs/toolkit";
import ingredientsSlice from "../features/ingredients/ingredientsSlice";
import constructorSlice from "../features/constructor/constructorSlice";

const stores=configureStore({
	reducer:{
		tollIngredients: ingredientsSlice,
		tollConstructor: constructorSlice,

	}
})
export default stores;