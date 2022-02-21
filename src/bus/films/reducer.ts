// types
import { types } from './types';

const initialState = {
    data:        null,
    isFetching:  false,
    error:       null,
    currentFilm: null,
};

export const filmReducer = (state: any = initialState, { type, payload }: any): any => {
    switch (type) {
        case types.FILM_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.FILM_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.FILM_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                data:  null,
            };
        case types.FILM_FILL:
            return {
                ...state,
                data:  payload,
                error: null,
            };

        case types.FILM_SET_CURRENT_FILM:
            return {
                ...state,
                currentFilm: payload,
            };


        default:
            return state;
    }
};
