import { register } from './AppDispatcher';
import EventEmitter from 'events';

const initialFormData = { name: '' };

let formData = { ...initialFormData };

class FormStore extends EventEmitter {
	getFormData() {
		return formData;
	}

	emitChange() {
		this.emit('change');
	}

	addChangeListener(cb) {
		this.on('change', cb);
	}

	removeChangeListner(cb) {
		this.removeListener('change', cb);
	}
}

const store = new FormStore();

register((action) => {
	switch (action.type) {
	case 'CHANGE': {
		formData = {
			...formData,
			...action.payload,
		};
		store.emitChange();
		break;
	}
	case 'RESET': {
		formData = { ...initialFormData };
		store.emitChange();
		break;
	}
	default:
		return;
	}
});


export default store;