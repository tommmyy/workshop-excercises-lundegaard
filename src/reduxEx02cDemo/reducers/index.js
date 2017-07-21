import ActionTypes from '../ActionTypes';

export default (state = { first: 0, nested: { first: 0 } }, action) => {
	switch (action.type) {
		case ActionTypes.INCREASE_FIRST:
			// TODO
		case ActionTypes.INCREASE_NESTED_FIRST:
			// TODO
		default:
			return state;
	}
};

// TODO: selectors