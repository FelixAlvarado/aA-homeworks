import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// function addLoggingToDispatch(store) {
//   const storeD = store.dispatch;
//   return (action) => {
//     console.log(store.getState());
//     console.log(action);
//     storeD(action);
//     console.log(store.getState());
//   };
// }

// const addLoggingToDispatch = store => next => action => {
//   console.log(store.getState());
//   console.log(action);
//   console.log(store.getState());
//     next(action);
// };
//
// function applyMiddlewares(store, ...middlewares){
//   let dispatch = store.dispatch;
//   middlewares.forEach((middleware) => {
//     dispatch = middleware(store)(dispatch);
//   });
//   return Object.assign({}, store, {dispatch});
// }


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

// store = applyMiddlewares(store, addLoggingToDispatch);
  // store.dispatch = addLoggingToDispatch(store);
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
