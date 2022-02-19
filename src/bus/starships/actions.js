// Api
import {api} from '../../../api';

//Types
import {types} from './types';

export const starshipsActions = Object.freeze({
    //Sync
    startFetching: ()=>{
        return {
            type: types.STARSHIPS_START_FETCHING,
        }
    },

    stopFetching: ()=>{
        return {
            type: types.STARSHIPS_STOP_FETCHING
        }
    },

    fill: (payload)=>{
        return {
            type: types.STARSHIPS_FILL,
            payload
        }
    },

    setFetchingError: (error)=>{
        return{
            type: types.STARSHIPS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },


    fetchAsync: ()=> async(dispatch)=>{
        dispatch(starshipsActions.startFetching());

        const response = await api.starships.fetch();

        if(response.status === 200){
            const {results } = await response.json();

            dispatch(starshipsActions.fill(results));
        }else{
            const error = {
                status: response.status
            };

            dispatch(starshipsActions.setFetchingError(error));
        }

        dispatch(starshipsActions.stopFetching());
    }
})