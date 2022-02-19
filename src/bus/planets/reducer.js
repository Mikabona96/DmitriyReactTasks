// types 
import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const planetsReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case types.PLANETS_START_FETCHING: 
        return {
            ...state,
            isFetching: true,
        };
        case types.PLANETS_STOP_FETCHING: 
        return {
            ...state,
            isFetching: false,
        };
        case types.PLANETS_SET_FETCHING_ERROR:
            return{
                ...state,
                error: payload,
                data: null,
            };
        case types.PLANETS_FILL: 
            return{
                ...state,
                data: payload,
                error: null,
            };


        default:
            return state
    }
}