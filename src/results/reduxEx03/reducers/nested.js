import ActionTypes from '../ActionTypes';
import { combineReducers } from 'redux';

const first = (state = 0, action) => action.type === ActionTypes.INCREASE_NESTED_FIRST ? state + 1 : state;

export default combineReducers({
	first,
});

export const getFirst = (state) => state.first;
