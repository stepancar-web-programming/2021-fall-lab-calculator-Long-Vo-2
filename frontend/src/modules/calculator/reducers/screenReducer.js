import { handleActions } from 'redux-actions';
import { createAction } from '@reduxjs/toolkit';

export const updateResult = createAction('SCREEN/UPDATE_RESULT', (result) => ({
    payload: { result }
}));

export const setCurrentExpression = createAction('SCREEN/SET_CURRENT_EXPRESSION', (expression) => ({
    payload: { expression }
}));

export const setError = createAction('SCREEN/SET_ERROR', (errorMessage) => ({
    payload: { errorMessage }
}));

export const clearError = createAction('SCREEN/SET_ERROR');

const initialState = {
    currentExpression: [],
    previousExpression: [],
    isChanged: true,
    error: false,
    errorMessage: ''
};

export default handleActions(
    {
        'SCREEN/UPDATE_RESULT': (state, { payload }) => ({
            previousExpression: state.currentExpression,
            currentExpression: payload?.result,
            isChanged: false,
            error: false,
            errorMessage: ''
        }),
        'SCREEN/SET_CURRENT_EXPRESSION': (state, { payload }) => ({
            ...state,
            currentExpression: payload?.expression,
            isChanged: true,
            error: false,
            errorMessage: ''
        }),
        'SCREEN/SET_ERROR': (state, { payload }) => ({
            ...state,
            error: true,
            errorMessage: payload?.errorMessage
        }),
        'SCREEN/CLEAR_ERROR': (state) => ({
            ...state,
            error: false,
            errorMessage: ''
        })
    },
    initialState
);
