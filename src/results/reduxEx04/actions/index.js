import ActionTypes from '../constants/ActionTypes';

export const changeFilterValues = (text) => ({
	type: ActionTypes.CHANGE_FILTER_VALUES,
	payload: {
		name: text,
		description: text,
	}
})