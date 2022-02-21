// API
import { api } from '../../api';

//Types
import { types } from './types';

export const filmsActions = Object.freeze({
    //Sync
    startFetching: ()=>{
        return {
            type: types.FILM_START_FETCHING,
        };
    },
    stopFetching: ()=>{
        return {
            type: types.FILM_STOP_FETCHING,
        };
    },
    fill: (payload: any)=>{
        return {
            type: types.FILM_FILL,
            payload,
        };
    },
    setCurrentFilm: (payload: any)=>{
        return {
            type: types.FILM_SET_CURRENT_FILM,
            payload,
        };
    },
    setFetchingError: (error: any)=>{
        return {
            type:    types.FILM_SET_FETCHING_ERROR,
            error:   true,
            payload: error,
        };
    },

    fetchAsync: () => async(dispatch: any)=>{
        dispatch(filmsActions.startFetching());

        const response = await api.films.fetch();

        if (response.status === 200) {
            const { results } = await response.json();

            dispatch(filmsActions.fill(results));
        } else {
            const error = {
                status: response.status,
            };

            dispatch(filmsActions.setFetchingError(error));
        }
        dispatch(filmsActions.stopFetching());
    },
});
