import ActionTypes from '../ActionTypes';
import { combineReducers } from 'redux';
import nested, * as fromNested from './nested';

const first = (state = 0, action) => action.type === ActionTypes.INCREASE_FIRST ? state + 1 : state;

const second = (state = 0, action) => action.type === ActionTypes.INCREASE_SECOND ? state + 1 : state;

export default combineReducers({
	first,
	second,
	nested,
})

export const getFirst = (state) => state.first;
export const getSecond = (state) => state.second;
export const getNestedFirst = (state) => fromNested.getFirst(state.nested);