import React from 'react';
import ReactDOM from 'react-dom';
import {  createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './Reducers'
import './index.css';
import App from './App';

const store = createStore(Reducers)

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);