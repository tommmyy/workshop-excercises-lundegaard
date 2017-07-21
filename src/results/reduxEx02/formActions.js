import { dispatch } from './AppDispatcher';

export const change = (field, value) => {
	dispatch({
      type: 'CHANGE',
      payload: {
      	[field]: value,
      }
    });
};

export const reset = () => {
	dispatch({
      type: 'RESET',
    });
};