//React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filmsActions } from '../actions';

export const useFilmFetch = (id: number): any =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch(`https://swapi.dev/api/films/${id}`)
            .then((response) => response.json())
            .then((response) => dispatch(filmsActions.setCurrentFilm(response)));
    }, [ dispatch ]);

    const film = useSelector((state: any)=>state.filmReducer.currentFilm);
    if (film) {
        return film;
    }
};
