import 'simplebar/src/simplebar.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

ReactDOM.render(
    <HelmetProvider>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </HelmetProvider>,
    document.getElementById('root')
);
