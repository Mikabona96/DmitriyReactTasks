import {useDispatch, useSelector} from 'react-redux';

import {userActions} from '../actions';

export const useUser = ()=>{
    const selector = (state)=>state.user;
    const {data} = useSelector(selector);
    const dispatch = useDispatch();

    const fillUser = (profile)=>{
        const action = userActions.fillProfile(profile);

        dispatch(action);
    }

    return {
        user: data,
        fillUser,
    }
}