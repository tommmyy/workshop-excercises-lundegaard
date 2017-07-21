import { dispatch } from './AppDispatcher';

export const addName = (name) => {
	dispatch({
      type: 'ADD_CHARACTER',
      payload: name
    });
};