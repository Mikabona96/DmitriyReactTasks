// types
import { types } from './types';

const initialState = {
    data:          null,
    isFetching:    false,
    error:         null,
    currentPerson: null,
};

export const peopleReducer = (state: any = initialState, { type, payload }: any): any => {
    switch (type) {
        case types.PEOPLE_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.PEOPLE_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.PEOPLE_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                data:  null,
            };
        case types.PEOPLE_FILL:
            return {
                ...state,
                data:  payload,
                error: null,
            };

        case types.PEOPLE_SET_CURRENT_PERSON:
            return {
                ...state,
                currentPerson: payload,
            };


        default:
            return state;
    }
};
