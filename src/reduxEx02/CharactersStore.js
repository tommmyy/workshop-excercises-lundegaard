import { register } from './AppDispatcher';
import EventEmitter from 'events';

let characters = ['Leia', 'Luke', 'Darth Vader'] ;

// https://nodejs.org/api/events.html#events_class_eventemitter
class CharactersStore extends EventEmitter {
	getCharacters() {
		return characters;
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

const store = new CharactersStore();

register((action) => {
	if (action.type === 'ADD_CHARACTER') {
		characters.push(action.payload);
		store.emitChange();
	}
});


export default store;