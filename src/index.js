import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './redux/core';
import { applyRepo } from "./redux/creators";


const middleware = [
  ...getDefaultMiddleware(),
  thunk,
  process.env.NODE_ENV !== 'production' && logger,
].filter(Boolean);

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

store.dispatch(applyRepo());


ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
  , document.getElementById('root')
);

serviceWorker.unregister();
