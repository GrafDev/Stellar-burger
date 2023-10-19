import {
    GET_ORDER_ITEMS_REQUEST,
    GET_ORDER_ITEMS_SUCCESS,
    GET_ORDER_ITEMS_FAILED,
    ORDER_ITEMS_RESET,
    ADD_INGREDIENT,
    ADD_BUN,
    REMOVE_INGREDIENT,
    MOVE_INGREDIENT
} from '../../types/constants-types/orders-types';
import {orderReducer} from "./order-reducer";

describe('orderReducer', () => {
    const initialState = {
        list: [],
        bun: undefined,
        orderDetails: undefined,
        request: false,
        failed: false,
        isLoaded: false
    };

    it('should return the initial state', () => {
        expect(orderReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_ORDER_ITEMS_REQUEST', () => {
        const action = { type: GET_ORDER_ITEMS_REQUEST };
        const expectedState = { ...initialState, request: true, failed: false };
        expect(orderReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle GET_ORDER_ITEMS_SUCCESS', () => {
        const action = { type: GET_ORDER_ITEMS_SUCCESS, orderDetails: { number: '123' } };
        const expectedState = { ...initialState, request: false, orderDetails: '123' };
        expect(orderReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle GET_ORDER_ITEMS_FAILED', () => {
        const action = { type: GET_ORDER_ITEMS_FAILED };
        const expectedState = { ...initialState, failed: true, request: false };
        expect(orderReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle ADD_INGREDIENT', () => {
        const action = { type: ADD_INGREDIENT, item: 'ingredient1' };
        const expectedState = { ...initialState, list: ['ingredient1'] };
        expect(orderReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle ADD_BUN', () => {
        const action = { type: ADD_BUN, item: 'bun1' };
        const expectedState = { ...initialState, bun: 'bun1' };
        expect(orderReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle REMOVE_INGREDIENT', () => {
        const initialStateWithIngredients = { ...initialState, list: [{ uniqueId: 'id1' }, { uniqueId: 'id2' }] };
        const action = { type: REMOVE_INGREDIENT, id: 'id1' };
        const expectedState = { ...initialStateWithIngredients, list: [{ uniqueId: 'id2' }] };
        expect(orderReducer(initialStateWithIngredients, action)).toEqual(expectedState);
    });

    it('should handle ORDER_ITEMS_RESET', () => {
        const initialStateWithIngredientsAndBun = { ...initialState, list: ['ingredient1'], bun: 'bun1' };
        const action = { type: ORDER_ITEMS_RESET };
        const expectedState = { ...initialStateWithIngredientsAndBun, isLoaded: false, orderDetails: undefined, list: [], bun: undefined };
        expect(orderReducer(initialStateWithIngredientsAndBun, action)).toEqual(expectedState);
    });

    it('should handle MOVE_INGREDIENT', () => {
        const initialStateWithIngredients = { ...initialState, list: ['ingredient1', 'ingredient2'] };
        const action = { type: MOVE_INGREDIENT, dragIndex: 0, hoverIndex: 1 };
        const expectedListAfterMove = ['ingredient2', 'ingredient1'];
        const expectedState = { ...initialStateWithIngredients, list: expectedListAfterMove };
        expect(orderReducer(initialStateWithIngredients, action)).toEqual(expectedState);
    });
});
