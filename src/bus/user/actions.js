import {types} from './types';

export const userActions = {
    fillProfile: (profile)=>{
        return {
            type: types.USER_FILL,
            payload: profile,
        }
    }
}