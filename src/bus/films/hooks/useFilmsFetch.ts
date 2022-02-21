//React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filmsActions } from '../actions';

export const useFilmsFetch = (): any =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(filmsActions.fetchAsync());
    }, [ dispatch ]);

    const films = useSelector((state: any)=>state.filmReducer);
    if (films) {
        const {
            data,
            isFetching,
            error,
        } = films;

        return {
            data,
            isFetching,
            error,
        };
    }
};
