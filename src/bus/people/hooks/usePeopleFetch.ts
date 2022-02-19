//React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peopleActions } from '../actions';

export const usePeopleFetch = (): any =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(peopleActions.fetchAsync());
    }, [ dispatch ]);

    const people = useSelector((state: any)=>state.peopleReducer);
    if (people) {
        const {
            data,
            isFetching,
            error,
        } = people;

        return {
            data,
            isFetching,
            error,
        };
    }
};
