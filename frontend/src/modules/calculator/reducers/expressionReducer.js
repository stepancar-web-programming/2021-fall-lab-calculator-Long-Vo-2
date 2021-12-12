import { handleActions } from 'redux-actions';
import axios from 'axios';

import { CALCULATE_URL } from '../constants';
import { asyncAction } from '../../core/utils/actions';

export const calculate = asyncAction('CALCULATOR/CALCULATE', ({ expression }) => {
    const headers = {
        'Content-Type': 'application/json'
    };
    return axios.post(
        CALCULATE_URL,
        { expression },
        {
            headers
        }
    );
});

const initialState = {
    loading: false,
    result: 0,
    error: false
};

export default handleActions(
    {
        [calculate.START]: () => ({
            loading: true,
            result: null,
            error: false
        }),

        [calculate.SUCCESS]: (state, { payload }) => ({
            loading: false,
            result: payload?.data?.answer,
            error: false
        }),

        [calculate.FAILURE]: () => ({
            loading: true,
            result: null,
            error: true
        })
    },
    initialState
);
