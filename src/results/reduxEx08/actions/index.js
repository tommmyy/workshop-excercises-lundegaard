import { camelizeKeys } from 'humps'
import { CALL_API, getJSON } from '@aftonbladet/redux-api-middleware';
import { normalize } from 'normalizr';
import ActionTypes from '../constants/ActionTypes';
import { getPagination, getFilterValues } from '../reducers';
import { volumeList } from './schema';

const URL = 'http://localhost:3000/api';
const API_KEY = '7a7664aed393040e7a4e32caabf89960916c6ea2';
const VOLUMES_FIELDS = [
    'id',
    'name',
    'description',
    'count_of_issues',
    'image',
].join(',');

export const changeFilterValues = (text) => (dispatch) => {
    dispatch({
        type: ActionTypes.CHANGE_FILTER_VALUES,
        payload: {
            name: text,
            description: text,
        },
    });

    return dispatch(fetchVolumes({ name: text, description: text }), 1);
}

const LIMIT = 10;

export const fetchVolumes = (searchCriteria = {}, page = 1) => dispatch => {
    const offset = LIMIT * (page - 1);
    const filter = searchCriteria && (searchCriteria.name || searchCriteria.description)
                    ? `name:${searchCriteria.name},description:${searchCriteria.description}`
                    : ''

    return dispatch({
        [CALL_API]: {
            endpoint: `${URL}/volumes/?api_key=${API_KEY}&format=json&field_list=${VOLUMES_FIELDS}&filter=${filter}&format=json&limit=${LIMIT}&offset=${offset}&sort=name:asc`,
            method: 'get',
            types: [
                ActionTypes.FETCH_ITEMS_REQUEST,
                {
                    type: ActionTypes.FETCH_ITEMS_SUCCESS,
                    meta: (action)=> ({ page }),
                    payload: (action, state, res) => getJSON(res)
                        .then((json) => camelizeKeys(json.results))
                        .then((payload) => normalize(payload, volumeList)),
                },
                ActionTypes.FETCH_ITEMS_ERROR,
            ],
        },
    });
};

export const fetchNextPageVolumes = () => (dispatch, getState) => {
    const state = getState();
    const nextPage = getPagination(state).page + 1;
    const searchCriteria = getFilterValues(state);

    return dispatch(fetchVolumes(searchCriteria, nextPage));
};
