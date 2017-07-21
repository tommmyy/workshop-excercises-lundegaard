import ActionTypes from '../ActionTypes';
import { combineReducers } from 'redux';

const first = (state = 0, action) => action.type === ActionTypes.INCREASE_FIRST ? state + 1 : state;
const firstNested = (state = 0, action) => action.type === ActionTypes.INCREASE_NESTED_FIRST ? state + 1 : state;

const nested = combineReducers({
	first: firstNested,
})

export default combineReducers({
	first,
	nested,
})



export const getFirst = (state) => state.first;
export const getNestedFirst = (state) => state.nested.first;