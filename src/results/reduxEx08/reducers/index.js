// import * as ActionTypes from '../actions'
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import ui, * as fromUi from './ui';
import R from 'ramda';

// Updates an entity cache in response to any action with response.entities.
const entities = (state = {}, action) => {
	if (action.payload && action.payload.entities) {
		return R.mergeDeepRight(state, action.payload.entities);
	} else {
		return state;
	}
};

const rootReducer = combineReducers({
	entities,
	form,
	ui,
});


export default rootReducer;

const getUi = (state) => state.ui;

export const getFilterValues = (state) => fromUi.getFilterValues(getUi(state));


export const isFetching = (state) => fromUi.isFetching(getUi(state));

export const getError = (state) => fromUi.getError(getUi(state));

export const getPagination = (state) => fromUi.getPagination(getUi(state));

export const getVolumes = (state) => state.entities.volumes;



export const getVisibleVolumes = (state) => {
	const byId = getPagination(state).byId;
	const volumes = getVolumes(state);

	return byId.map(id => volumes[id])
};