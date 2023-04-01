import {applyMiddleware, combineReducers,  createStore} from 'redux';
import {currentIngredientReducer} from "./reducers/current-ingredient-reducer";
import {orderReducer} from "./reducers/order-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk"
import {ingredientsReducer} from "./reducers/ingredients-reducer";
import {constructorReducer} from "./reducers/constructor-reducer";

export const rootReducer = combineReducers({
	ingredients: ingredientsReducer,
	constructorStore: constructorReducer,
	current: currentIngredientReducer,
	order: orderReducer,

});


export const mainStore=(initialState)=>{
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunkMiddleware)));
return store;
}
