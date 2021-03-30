import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const inititalState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: {
            const updatedIngredient = { [action.ingredients]: state.ingredients[action.ingredients] + 1 }
            const updateIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updateIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredients]
            }
            console.log(state);
            return updateObject(state, updatedState)

        }
        case actionTypes.REMOVE_INGREDIENT: {
            const updatedIngredient = { [action.ingredients]: state.ingredients[action.ingredients] - 1 }
            const updateIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updateIngredients,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredients]
            }
            console.log(state);
            return updateObject(state, updatedState)
        }
        case actionTypes.FETCH_INGREDIENTS_FAILED: {
            return {
                ...state,
                error: true
            }
        }
        case actionTypes.SET_INGREDIENTS: {
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 4,
                error: false
            }
        }
        default: {
            return state
        }

    }

}

export default reducer;