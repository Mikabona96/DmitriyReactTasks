// Types
import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const starshipsReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case types.STARSHIPS_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.STARSHIPS_STOP_FETCHING: 
            return {
                ...state,
                isFetching: false
            };
        case types.STARSHIPS_SET_FETCHING_ERROR: 
            return {
                ...state,
                error: payload,
                data: null,
            };
        case types.STARSHIPS_FILL: 
            return {
                ...state,
                data: payload,
                error: null,
            };
        default: 
        return state;
    }
}