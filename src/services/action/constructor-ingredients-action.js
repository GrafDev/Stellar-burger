export const INCREASE_CONSTRUCTOR_INGREDIENTS = 'INCREASE_CONSTRUCTOR_INGREDIENTS';
export const DECREASE_CONSTRUCTOR_INGREDIENTS = 'DECREASE_CONSTRUCTOR_INGREDIENTS';


export const setIncreaseConstructorIngredients = (_item) => ({
	type: INCREASE_CONSTRUCTOR_INGREDIENTS,
	payload:_item,
})
export const setDecreaseConstructorIngredients = (_id) => ({
	type: DECREASE_CONSTRUCTOR_INGREDIENTS,
	payload: _id,
})

