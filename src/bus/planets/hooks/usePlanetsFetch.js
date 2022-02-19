//React
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {planetsActions} from '../actions';

export const usePlanetsFetch = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(planetsActions.fetchAsync());
    }, [dispatch]);

    const {
        data,
        isFetching,
        error
    } = useSelector((state)=>state.planets);

    return {
        data,
        isFetching,
        error,
    }
}