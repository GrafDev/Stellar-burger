import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients-reducer';
import { orderReducer } from './order-reducer';
import { usersReducer } from './user-reducer';
import { passwordReducer } from './reset-password-reducer';
import { wsReducer } from './ws-reducer';
import { wsAuthReducer } from './ws-auth-reducer';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  user: usersReducer,
  password: passwordReducer,
  wsOrders: wsReducer,
  wsAuthOrders: wsAuthReducer
}) 