import {applyMiddleware, combineReducers,  createStore} from 'redux';
import {currentIngredientReducer} from "./reducers/current-ingredient-reducer";
import {orderReducer} from "./reducers/order-reducer";
import {customMiddleware} from "./middleware/customMiddleware";
import {composeWithDevTools} from "redux-devtools-extension";


export const rootReducer = combineReducers({
	//ingredients: ingredientsReducer,
	// constructor: constructorIngredientsReducer,
	currentIngredient: currentIngredientReducer,
	order: orderReducer,

});


export const configureStore=(initialState)=>{
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(customMiddleware())));
return store;
}
