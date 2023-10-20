import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SET_SELECTED_INGREDIENT,
    REMOVE_SELECTED_INGREDIENT
} from '../../types/constants-types/ingredients-types';
import {ingredientsReducer, initialIngredientsState} from "./ingredients-reducer";

describe('ingredientsReducer', () => {


    it('should return the initial state', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(initialIngredientsState);
    });

    it('should handle GET_INGREDIENTS_REQUEST', () => {
        const action = { type: GET_INGREDIENTS_REQUEST };
        const expectedState = { ...initialIngredientsState, loaded: true };
        expect(ingredientsReducer(initialIngredientsState, action)).toEqual(expectedState);
    });

    it('should handle GET_INGREDIENTS_SUCCESS', () => {
        const action = { type: GET_INGREDIENTS_SUCCESS, ingredients: ['ingredient1', 'ingredient2'] };
        const expectedState = { ...initialIngredientsState, loaded: false, ingredients: ['ingredient1', 'ingredient2'] };
        expect(ingredientsReducer(initialIngredientsState, action)).toEqual(expectedState);
    });

    it('should handle GET_INGREDIENTS_FAILED', () => {
        const action = { type: GET_INGREDIENTS_FAILED };
        const expectedState = { ...initialIngredientsState, error: true };
        expect(ingredientsReducer(initialIngredientsState, action)).toEqual(expectedState);
    });

    it('should handle SET_SELECTED_INGREDIENT', () => {
        const action = { type: SET_SELECTED_INGREDIENT, ingredients: 'selectedIngredient' };
        const expectedState = { ...initialIngredientsState, error: false, selectedIngredient: 'selectedIngredient' };
        expect(ingredientsReducer(initialIngredientsState, action)).toEqual(expectedState);
    });

    it('should handle REMOVE_SELECTED_INGREDIENT', () => {
        const action = { type: REMOVE_SELECTED_INGREDIENT };
        const expectedState = { ...initialIngredientsState, selectedIngredient: null };
        expect(ingredientsReducer(initialIngredientsState, action)).toEqual(expectedState);
    });
});
