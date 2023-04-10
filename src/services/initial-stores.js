
export const initialIngredientsStore = {
	ingredients: [],
	hasError: false,
	isLoading: true,
}
export const initialConstructorStore= {
	constructorIngredients: {
		pieces:[],
		bun:null,
	},
	constructorIngredientsRequest: false,
	constructorIngredientsFailed: false,
}

export const initialCurrentIngredientStore= {
	currentIngredient: null,
	isModalIngredient:false,
}
export const initialOrderStore={
	orderIngredients:[],
	id:0,
	isModalOrder:false,
};


