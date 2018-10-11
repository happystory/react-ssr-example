import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = (state={name: 'liuyao'}, action) => {
  return state;
};

const getStore = () => {
  return createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
}

export default getStore;
