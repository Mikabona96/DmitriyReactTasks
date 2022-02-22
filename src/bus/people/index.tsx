/* eslint-disable react/no-unused-prop-types */
import React, { FC } from 'react';
import { usePeopleFetch } from './hooks/usePeopleFetch';
import { Outlet, useNavigate } from 'react-router-dom';
import { PeopleSection, PeoplePopup, ListJSX } from './styles';
import { useDispatch } from 'react-redux';
import { peopleActions } from './actions';

export const People: FC = (): any=>{
    const peopleFetch = usePeopleFetch();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if (peopleFetch) {
        const { isFetching, data, error } = peopleFetch;
        if (error && error.status === 404) {
            return <p>Not Found !</p>;
        }

        if (error && error.status !== 404) {
            return <p>Something went wrong</p>;
        }

        const spinnerJSX = isFetching && (
            <p>Loading data from api</p>
        );

        const listJSX = !isFetching && data && data.length && data.map((person: any, index: number)=>{
            const idRegExp = /\/([0-9]*)\/$/;
            const id =  person.url.match(idRegExp)[ 1 ];

            return (
                <ListJSX
                    key = { String(index) }
                    onClick = { () => {
                        dispatch(peopleActions.setCurrentPerson(person));
                        navigate(`/lesson7/people/${id}`);
                    } }>{person.name}
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
