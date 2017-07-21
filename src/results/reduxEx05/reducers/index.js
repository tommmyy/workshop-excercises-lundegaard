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

const rootReducer = combineReducers({
	volumes,
	filter,
});


export default rootReducer;

const search = (text = '', filter = '') => text.toLowerCase().trim().includes(filter.trim().toLowerCase());

export const getFilterValues = (state) => state.filter;

export const getVolumesByFilter = (state, filterValues) => state.volumes.filter(
	({ name, description }) => search(name || '', filterValues.name) || search(description || '', filterValues.description)
)