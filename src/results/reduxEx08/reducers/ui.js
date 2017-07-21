// import * as ActionTypes from '../actions'
import { combineReducers } from 'redux';
import ActionTypes from '../constants/ActionTypes';
import pagination from './pagination';

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

const error = (state = false, action) => {
	if (action.error) {
		return true;
	} else {
		return state;
	}
}


const rootReducer = combineReducers({
	filter,
	fetching,
	error,
	pagination,
});


export default rootReducer;


export const getFilterValues = (state) => state.filter;

export const isFetching = (state) => state.fetching;

export const getPagination  = (state) => state.pagination;

export const getError = (state) => state.error;