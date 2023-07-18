import {configureStore} from "@reduxjs/toolkit";
import ingredientsSlice from "../features/ingredients/ingredientsSlice";
import constructorSlice from "../features/constructor/constructorSlice";
import currentIngredientSlice from "../features/currentIngredient/currentIngredientSlice";
import orderSlice from "../features/order/orderSlice";
import authSlice from "../features/auth/authSlice";

const stores=configureStore({
	reducer:{
		ingredientsStore: ingredientsSlice,
		constructorStore: constructorSlice,
		currentStore:currentIngredientSlice,
		orderStore:orderSlice,
		authStore:authSlice,
	}
})
export default stores;