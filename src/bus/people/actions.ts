// API
import { api } from '../../api';

//Types
import { types } from './types';

export const peopleActions = Object.freeze({
    //Sync
    startFetching: ()=>{
        return {
            type: types.PEOPLE_START_FETCHING,
        };
    },
    stopFetching: ()=>{
        return {
            type: types.PEOPLE_STOP_FETCHING,
        };
    },
    fill: (payload: any)=>{
        return {
            type: types.PEOPLE_FILL,
            payload,
        };
    },
    setCurrentPerson: (payload: any)=>{
        return {
            type: types.PEOPLE_SET_CURRENT_PERSON,
            payload,
        };
    },
    setFetchingError: (error: any)=>{
        return {
            type:    types.PEOPLE_SET_FETCHING_ERROR,
            error:   true,
            payload: error,
        };
    },

    fetchAsync: () => async(dispatch: any)=>{
        dispatch(peopleActions.startFetching());

        const response = await api.people.fetch();

        if (response.status === 200) {
            const { results } = await response.json();

            dispatch(peopleActions.fill(results));
        } else {
            const error = {
                status: response.status,
            };

            dispatch(peopleActions.setFetchingError(error));
        }
        dispatch(peopleActions.stopFetching());
    },
});
