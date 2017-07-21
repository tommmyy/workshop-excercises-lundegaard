import { Dispatcher } from 'flux';

// See https://facebook.github.io/flux/docs/dispatcher.html
const appDispatcher = new Dispatcher();


export const dispatch = (action) => appDispatcher.dispatch(action);

// export const dispatch = (action) => {
// 	if (!action.type) {
// 		throw new Error('You forgot to specify type.');
// 	}

// 	if (action.error) {
// 		console.error(action.type, action);
// 	} else {
// 		console.log(action.type, action);
// 	}

// 	appDispatcher.dispatch(action);
// };

export const register = (cb) => appDispatcher.register(cb);
