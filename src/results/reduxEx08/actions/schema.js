import { schema } from 'normalizr';

export const volume = new schema.Entity('volumes');
export const volumeList = new schema.Array(volume);