import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import App from './App';

const rootElement = document.getElementById('root');

//passe a store para a app com um Provider
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    rootElement
);
