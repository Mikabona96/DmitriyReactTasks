//React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peopleActions } from '../actions';

export const usePersonFetch = (id: number): any =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((response) => response.json())
            .then((response) => dispatch(peopleActions.setCurrentPerson(response)));
    }, [ dispatch ]);

    const person = useSelector((state: any)=>state.peopleReducer.currentPerson);
    if (person) {
        return person;
    }
};
