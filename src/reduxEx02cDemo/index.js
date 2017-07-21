import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from './reducers';
import ActionTypes from './ActionTypes';

// TODO: 1. Tests
// TODO: 2. Reducer
// TODO: 4. combineReducers
// TODO: 3. Selectors

const store = createStore(rootReducer);

console.log('Default state', store.getState());

store.subscribe(() => {
	const state = store.getState();

	console.log('New state', { newState: state });

	// console.log(
	// 	getFirst(state),

	// 	getNestedFirst(state),
	// );

})

store.dispatch({ type: ActionTypes.INCREASE_FIRST });
store.dispatch({ type: ActionTypes.INCREASE_NESTED_FIRST });

console.log('Updated state', store.getState());
