import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from './store/configureStore';
import App from './components/App';

const store = configureStore();

const root = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   root
 );
