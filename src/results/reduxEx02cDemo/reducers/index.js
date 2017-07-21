import ActionTypes from '../ActionTypes';
import { combineReducers } from 'redux';

// export default (state = { first: 0, nested: { first: 0 } }, action) => {
// 	switch (action.type) {
// 		case ActionTypes.INCREASE_FIRST:
// 			return {
// 				...state,
// 				first: state.first + 1,
// 			};
// 		case ActionTypes.INCREASE_NESTED_FIRST:
// 			return {
// 				...state,
// 				nested: {
// 					first: state.nested.first + 1
// 				},
// 			};
// 		default:
// 			return state;
// 	}
// };

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