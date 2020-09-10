import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from './routers/Router';
import configure from './store/configureStore';
import 'normalize.css';
import './styles/styles.scss';

const store = configure();

const jsx = (
    <Provider store={store} >
        <Router />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));