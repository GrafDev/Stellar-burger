export const INCREASE_CONSTRUCTOR_INGREDIENTS = 'INCREASE_CONSTRUCTOR_INGREDIENTS';
export const DECREASE_CONSTRUCTOR_INGREDIENTS = 'DECREASE_CONSTRUCTOR_INGREDIENTS';
export const DELETE_CONSTRUCTOR_INGREDIENTS = 'DELETE_CONSTRUCTOR_INGREDIENTS';
export const LOAD_CONSTRUCTOR_INGREDIENTS = 'LOAD_CONSTRUCTOR_INGREDIENTS';

export const setIncreaseConstructorIngredients = (ingredient) => ({
	type: INCREASE_CONSTRUCTOR_INGREDIENTS,
	ingredient:ingredient,
})
export const setDecreaseConstructorIngredients = () => ({
	type: DECREASE_CONSTRUCTOR_INGREDIENTS,
})
export const deleteConstructorIngredients = () => ({
	type: DELETE_CONSTRUCTOR_INGREDIENTS,
})
export const loadConstructorIngredients = (data) => ({
	type: LOAD_CONSTRUCTOR_INGREDIENTS,
	ingredients:data
})