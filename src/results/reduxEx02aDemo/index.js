import expect from 'expect';
import { createStore } from 'redux';

const ActionTypes = {
	INCREASE: 'INCREASE',
	DECREASE: 'DECREASE',
};

/*
const ActionTypes = keyMirror({
	INCREASE: null,
	DECREASE: null,
});
 */

// Test-first approach

const rootReducer = (state = 0, action) => {
	switch (action.type) {
		case ActionTypes.INCREASE:
			return state + 1;
		case ActionTypes.DECREASE:
			return state - 1;
		default:
			return state;
	}
};

expect(rootReducer(0, { type: ActionTypes.INCREASE })).toBe(1);
expect(rootReducer(1, { type: ActionTypes.DECREASE })).toBe(0);


// const store = createStore(rootReducer);
const store = createStore(rootReducer, 666);

console.log('Default state', store.getState());

store.subscribe(() => {
	console.log({ newState: store.getState() });
})

store.dispatch({ type: ActionTypes.INCREASE });
store.dispatch({ type: ActionTypes.INCREASE });
store.dispatch({ type: ActionTypes.DECREASE });
store.dispatch({ type: ActionTypes.INCREASE });

console.log('Updated state', store.getState());


// reducers, acke vlastní files,
// akce (přidat akční kreátory)
// cofigureStore