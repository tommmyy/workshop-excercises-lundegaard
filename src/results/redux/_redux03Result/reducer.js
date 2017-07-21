import { combineReducers } from 'redux';
import ActionTypes from './ActionTypes';

function users(state = [], action) {
	switch (action.type) {
		case ActionTypes.ADD_USER:
			return [
				...state,
				{ ...action.payload }
			];
		default:
			return state;
	}
}

export default combineReducers({ users });

export const getUsers = (state) => state.users;