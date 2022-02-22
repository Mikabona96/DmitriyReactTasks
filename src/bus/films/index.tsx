/* eslint-disable react/no-unused-prop-types */
import React, { FC } from 'react';
import { useFilmsFetch } from './hooks/useFilmsFetch';
import { Outlet, useNavigate } from 'react-router-dom';
import { PeopleSection, PeoplePopup, ListJSX } from './styles';
import { useDispatch } from 'react-redux';
import { filmsActions } from './actions';

export const Films: FC = (): any=>{
    const filmsFetch = useFilmsFetch();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if (filmsFetch) {
        const { isFetching, data, error } = filmsFetch;
        if (error && error.status === 404) {
            return <p>Not Found !</p>;
        }

        if (error && error.status !== 404) {
            return <p>Something went wrong</p>;
        }

        const spinnerJSX = isFetching && (
            <p>Loading data from api</p>
        );

        const listJSX = !isFetching && data && data.length && data.map((film: any, index: number)=>{
            const idRegExp = /\/([0-9]*)\/$/;
            const id =  film.url.match(idRegExp)[ 1 ];

            return (
                <ListJSX
                    key = { String(index) }
                    onClick = { () => {
                        dispatch(filmsActions.setCurrentFilm(film));
                        navigate(`/lesson7/films/${id}`);
                    } }>{film.title}
                </ListJSX>
            );
        });

        return (
            <PeopleSection>
                <div>
                    {spinnerJSX}
                    {listJSX}
                </div>
                <PeoplePopup>
                    <Outlet />
                </PeoplePopup>
            </PeopleSection>
        );
    }

    return <div>Ooops</div>;
};
