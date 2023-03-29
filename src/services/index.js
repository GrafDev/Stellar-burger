import { combineReducers } from 'redux';
import {constructorIngredientsReducer} from "./reducers/constructor-ingredients-reducer";
import {currentIngredientReducer} from "./reducers/current-ingredient-reducer";
import {orderReducer} from "./reducers/order-reducer";
import {ingredientsReducer} from "./reducers/ingredients-reducer";


export const rootReducer = combineReducers({
	//ingredients: ingredientsReducer,
	// constructor: constructorIngredientsReducer,
	currentIngredient: currentIngredientReducer,
	order: orderReducer,

});