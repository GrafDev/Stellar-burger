import {configureStore} from "@reduxjs/toolkit";
import ingredientsSlice from "../features/ingredients/ingredientsSlice";
import constructorSlice from "../features/constructor/constructorSlice";
import currentIngredientSlice from "../features/currentIngredient/currentIngredientSlice";
import orderSlice from "../features/order/orderSlice";
import menuSlice from "../features/menu/menuSlice";

const stores=configureStore({
	reducer:{
		ingredientsStore: ingredientsSlice,
		constructorStore: constructorSlice,
		currentStore:currentIngredientSlice,
		orderStore:orderSlice,
		menuStore:menuSlice,
	}
})
export default stores;