import { configureStore } from '@reduxjs/toolkit';
import calculator from '../modules/calculator/reducers';

const store = configureStore({
    reducer: {
        calculator
    }
});

export default store;
