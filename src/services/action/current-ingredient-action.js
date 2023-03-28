export const SET_CURRENT_INGREDIENT='SET_CURRENT_INGREDIENT'
export const SET_MODAL_CURRENT_INGREDIENT='SET_MODAL_CURRENT_INGREDIENT'
export const DESET_MODAL_CURRENT_INGREDIENT='DESET_MODAL_CURRENT_INGREDIENT'

export const setCurrentIngredient = (cart) => ({
	type: SET_CURRENT_INGREDIENT,
	cart:cart,
})
export const setModalCurrentIngredient = () => ({
	type: SET_MODAL_CURRENT_INGREDIENT,
})
export const desetModalCurrentIngredient = () => ({
	type: DESET_MODAL_CURRENT_INGREDIENT,
})