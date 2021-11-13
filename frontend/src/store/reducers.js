import { configureStore } from '@reduxjs/toolkit';
import calculator from '../modules/calculator/reducers';

export const store = configureStore({
    reducer: {
        calculator
    }
});
