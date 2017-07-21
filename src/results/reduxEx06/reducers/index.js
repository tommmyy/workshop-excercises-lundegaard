// import * as ActionTypes from '../actions'
import { combineReducers } from 'redux';
import ActionTypes from '../constants/ActionTypes';

// Updates an entity cache in response to any action with response.entities.
const volumes = (state = [], action) => {
	switch (action.type) {
	case ActionTypes.FETCH_ITEMS_SUCCESS:
		return action.payload;
	default:
		return state;
	}
};


const filter = (state = {}, action) => {
	switch (action.type) {
	case ActionTypes.CHANGE_FILTER_VALUES:
		return action.payload;
	default:
		return state;
	}
}

const fetching = (state = false, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_ITEMS_REQUEST:
			return true;
		case ActionTypes.FETCH_ITEMS_SUCCESS:
			return false;
		case ActionTypes.FETCH_ITEMS_ERROR:
			return false;
		default:
			return false;
	}
}

const error = (state = null, action) => {
	if (action.error) {
		return action.payload;
	} else {
		return state;
	}
}

const rootReducer = combineReducers({
	volumes,
	filter,
	fetching,
	error,
});


export default rootReducer;


export const getFilterValues = (state) => state.filter;

export const getVolumes = (state) => state.volumes;

export const isFetching = (state) => state.fetching;

export const getError = (state) => state.error;