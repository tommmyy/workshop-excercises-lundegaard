import ActionTypes from '../constants/ActionTypes';
import { camelizeKeys } from 'humps'
const URL = 'http://localhost:3000/api';
const API_KEY = '7a7664aed393040e7a4e32caabf89960916c6ea2';
const VOLUMES_FIELDS = [
    'id',
    'name',
    'description',
    'count_of_issues',
    'image',
].join(',');

export const changeFilterValues = text => ({
    type: ActionTypes.CHANGE_FILTER_VALUES,
    payload: {
        name: text,
        description: text,
    },
});

export const fetchVolumes = () => dispatch => {
    dispatch({ type: ActionTypes.FETCH_ITEMS_REQUEST });

    return fetch(`${URL}/volumes/?api_key=${API_KEY}&format=json&field_list=${VOLUMES_FIELDS}&format=json&limit=10&sort=name:asc`)
        .then((response) => response.json())
        .then((json) => camelizeKeys(json.results))
        .then((payload) => dispatch({ type: ActionTypes.FETCH_ITEMS_SUCCESS, payload }))
        .catch((err) => dispatch({ type: ActionTypes.FETCH_ITEMS_ERROR, error: true, payload: err }));
};
