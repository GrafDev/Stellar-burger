import {ICart} from "../../../utils/data-Types";

export const getIngredientsSelector= (state: { ingredientsStore: { ingredients: Array<ICart>; }; }):Array<ICart>=>state.ingredientsStore.ingredients
export const getIngredientsIsLoadingSelector= (state: { ingredientsStore: { isLoading: boolean; }; }):boolean=>state.ingredientsStore.isLoading
export const getIngredientsHasErrorSelector=(state: { ingredientsStore: { hasError: boolean; }; }):boolean=>state.ingredientsStore.hasError

