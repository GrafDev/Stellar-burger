
export const getConstructorIngredients:(state: { constructorStore: { ingredients: any } }) => any = (state: { constructorStore: { ingredients: any; }; })=>state.constructorStore.ingredients
export const getConstructorPieces:(state: { constructorStore: { ingredients: { pieces: any } } }) => any= (state: { constructorStore: { ingredients: { pieces: any; }; }; })=>state.constructorStore.ingredients.pieces