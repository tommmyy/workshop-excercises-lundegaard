import ActionTypes from './ActionTypes';

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

export default rootReducer;