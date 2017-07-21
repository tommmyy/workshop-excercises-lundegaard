import rootReducer from '../reduxEx02bDemo/reducer';
import { createStore } from 'redux';

function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState
	);
}


export default configureStore;