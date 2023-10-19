import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SET_SELECTED_INGREDIENT,
    REMOVE_SELECTED_INGREDIENT
} from '../../types/constants-types/ingredients-types';
import {ingredientsReducer} from "./ingredients-reducer";

describe('ingredientsReducer', () => {
    const initialState = {
        ingredients: [],
        loaded: false,
        error: false,
        selectedIngredient: null,
    };

    it('should return the initial state', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_INGREDIENTS_REQUEST', () => {
        const action = { type: GET_INGREDIENTS_REQUEST };
        const expectedState = { ...initialState, loaded: true };
        expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle GET_INGREDIENTS_SUCCESS', () => {
        const action = { type: GET_INGREDIENTS_SUCCESS, ingredients: ['ingredient1', 'ingredient2'] };
        const expectedState = { ...initialState, loaded: false, ingredients: ['ingredient1', 'ingredient2'] };
        expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle GET_INGREDIENTS_FAILED', () => {
        const action = { type: GET_INGREDIENTS_FAILED };
        const expectedState = { ...initialState, error: true };
        expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_SELECTED_INGREDIENT', () => {
        const action = { type: SET_SELECTED_INGREDIENT, ingredients: 'selectedIngredient' };
        const expectedState = { ...initialState, error: false, selectedIngredient: 'selectedIngredient' };
        expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle REMOVE_SELECTED_INGREDIENT', () => {
        const action = { type: REMOVE_SELECTED_INGREDIENT };
        const expectedState = { ...initialState, selectedIngredient: null };
        expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
    });
});
