import { combineReducers } from 'redux';
import ActionTypes from '../constants/ActionTypes';

const byId = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.FETCH_ITEMS_SUCCESS: {
			return [
				...state,
				...action.payload.result,
			];
		}
		case ActionTypes.FETCH_ITEMS_ERROR:
		case ActionTypes.CHANGE_FILTER_VALUES:
			return [];
		default:
			return state;
	}
}

const page = (state = 1, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_ITEMS_SUCCESS: {
			return action.meta.page || 1;
		}
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	byId,
	page
});

export default rootReducer;

