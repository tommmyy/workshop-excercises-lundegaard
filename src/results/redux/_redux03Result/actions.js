import ActionTypes from './ActionTypes';

export const addUser = (user) => ({
	type: ActionTypes.ADD_USER,
	payload: user,
});