import {types} from './types';

const initialState = {
    data: {
        firstName: 'Oliver',
        lastName: 'Black',
        email: 'o@gmail.com',
        jobType: 'developer',
    }
};

export const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.USER_FILL: {
            return {
                ...state,
                data: action.payload,
            }
        }

        default: 
            return state
    }
}