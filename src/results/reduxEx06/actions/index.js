import ActionTypes from '../constants/ActionTypes';
import { camelizeKeys } from 'humps'
import { CALL_API, getJSON } from '@aftonbladet/redux-api-middleware';

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

    dispatch(fetchVolumes({ name: text, description: text}))
        .then(() => {
            return dispatch({
                type: ActionTypes.CHANGE_FILTER_VALUES,
                payload: {
                    name: text,
                    description: text,
                },
            });
        });

}

export const fetchVolumes = (searchCriteria) => dispatch => {
    dispatch({ type: ActionTypes.FETCH_ITEMS_REQUEST });

    const filter = searchCriteria
                    ? `name:${searchCriteria.name},description:${searchCriteria.description}`
                    : ''

    return dispatch({
        [CALL_API]: {
            endpoint: `${URL}/volumes/?api_key=${API_KEY}&format=json&field_list=${VOLUMES_FIELDS}&filter=${filter}&format=json&limit=10&sort=name:asc`,
            method: 'get',
            types: [
                ActionTypes.FETCH_ITEMS_REQUEST,
                {
                    type: ActionTypes.FETCH_ITEMS_SUCCESS,
                    payload: (action, state, res) => getJSON(res).then((json) => camelizeKeys(json.results)),
                },
                ActionTypes.FETCH_ITEMS_ERROR,
            ],
        },
    });
};
