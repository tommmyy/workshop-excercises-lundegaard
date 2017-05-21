import rootReducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import logger from '../redux02/loggerMiddleware';

function configureStore(initialState) {
	const middlewares = [logger];

	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares)
	);
}


export default configureStore;