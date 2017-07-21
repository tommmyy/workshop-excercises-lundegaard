import rootReducer from '../reduxEx02bDemo/reducer';
import { createStore, applyMiddleware } from 'redux';
import logger from './loggerMiddleware';

function configureStore(initialState) {
	const middlewares = [logger];

	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares)
	);
}


export default configureStore;