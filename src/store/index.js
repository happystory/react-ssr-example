import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';
import { reducer as headerReducer } from '../components/Header/store';
import { reducer as translationReducer } from '../containers/Translation/store';

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
});

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getStore = () => {
  return createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
}

export const getClientStore = () => {
  const defaultState =  window.context.state;

  return createStore(reducer, defaultState, composeEnhancers(
    applyMiddleware(thunk)
  ));
}

export default getStore;
