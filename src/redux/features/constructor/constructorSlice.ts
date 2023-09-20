import {createSlice, Slice} from "@reduxjs/toolkit";
import {v4} from "uuid";
import {BUN} from "../../../utils/constants/ingredient-constants";
import {ICart, IConstructorState} from "../../../utils/data-Types";






const initialState: IConstructorState  = {
    ingredients: {
        pieces: [],
        bun: null,
    },
    constructorIngredientsRequest: false,
    constructorIngredientsFailed: false,
}




const constructorSlice:Slice<IConstructorState> = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        increaseConstructor: (state: IConstructorState, action: { payload: ICart }) => {
            if (action.payload.type === BUN) {
                state.ingredients.bun = action.payload
            } else {
                let _constructorIngredient  = {
                    ...action.payload,
                    constructorId: v4()
                }

                state.ingredients.pieces = [
                    ...state.ingredients.pieces,
                    _constructorIngredient
                ];
            }
        },
        decreaseConstructor: (state:IConstructorState, action:{payload:string}) => {
            state.ingredients.pieces = state.ingredients.pieces.filter((item:any):boolean  => item.constructorId !== action.payload) //TODO: Разобраться с типизацией
        },
        moveConstructorCart: (state:IConstructorState, action:{payload:any}) => { //TODO: Разобраться с типизацией
            state.ingredients.pieces = action.payload


        }

    },

})


export const {increaseConstructor, decreaseConstructor, moveConstructorCart} = constructorSlice.actions
export default constructorSlice.reducer

