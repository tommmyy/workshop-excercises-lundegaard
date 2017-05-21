const logger = (store) => (next) => (action) => {
	console.group();
	console.log('Prev state', store.getState());
	console.log('Action', action);
	const result = next(action);
	console.log('Next state', store.getState());
	console.groupEnd();

	return result;
};

export default logger;