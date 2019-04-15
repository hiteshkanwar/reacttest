import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import history from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.css'
import './../public/assets/css/style.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const historyMiddleware = routerMiddleware(history);

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(historyMiddleware, thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, document.getElementById('root'));