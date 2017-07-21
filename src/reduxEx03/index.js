import expect from 'expect';
import { createStore } from 'redux';
import rootReducer, { getFirst, getNestedFirst } from './reducers';
import ActionTypes from './ActionTypes';

expect(
	rootReducer(
		{ first: 0, nested: { first: 0 } },
		{ type: ActionTypes.INCREASE_FIRST }
	)
).toEqual(
	{ first: 1, nested: { first: 0 } }
);


expect(
	rootReducer(
		{ first: 0, nested: { first: 0 } },
		{ type: ActionTypes.INCREASE_NESTED_FIRST }
	)
).toEqual(
	{ first: 0, nested: { first: 1 } }
);

const store = createStore(rootReducer);

console.log('Default state', store.getState());

store.subscribe(() => {
	const state = store.getState();

	console.log('New state', { newState: state });

	console.log(
		getFirst(state),

		getNestedFirst(state),
	);

})

store.dispatch({ type: ActionTypes.INCREASE_FIRST });
store.dispatch({ type: ActionTypes.INCREASE_NESTED_FIRST });

console.log('Updated state', store.getState());
