import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from '@aftonbladet/redux-api-middleware';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(
      thunk,
      apiMiddleware,
      createLogger()
    )));

  return store;
};

export default configureStore;