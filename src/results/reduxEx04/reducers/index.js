import { combineReducers } from 'redux';
import ActionTypes from '../constants/ActionTypes';

const volumes = (state = [], action) => {
	return state;
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

/**
 * search('  aHOJ jak', 'ahoj') // => true
 */
const search = (text = '', filter = '') => text.toLowerCase().trim().includes(filter.trim().toLowerCase());

export const getFilterValues = (state) => state.filter;

/**
 * Filters volumes according to filterValues.
 */
export const getVolumesByFilter = (state, filterValues = { name: '', description: ''}) => state.volumes.filter(
	({ name = '', description = '' }) =>	search(name, filterValues.name) ||
											search(description, filterValues.description)
)