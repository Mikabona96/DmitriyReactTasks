/* eslint-disable react/no-unused-prop-types */
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { usePersonFetch } from '../hooks/usePersonFetch';
import { PersonDetails, PersonImage, ListGroup } from '../styles';


export const Person: FC = (): any=>{
    const location = useLocation();
    const idRegExp = /\/([0-9]*)\/$/;
    const path: any =  location.pathname + '/';
    const id = path.match(idRegExp)[ 1 ];
    const person = usePersonFetch(id);

    if (person) {
        return (
            <PersonDetails>
                <PersonImage
                    alt = 'character'
                    src = { `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }
                />

                <div>
                    <h4>{person.name}</h4>
                    <ul>
                        <ListGroup>
                            <span className = 'term'>Gender:</span>
                            <span>{person.gender}</span>
                        </ListGroup>
                        <ListGroup>
                            <span className = 'term'>Birth Year:</span>
                            <span>{person.birth_year}</span>
                        </ListGroup>
                        <ListGroup>
                            <span className = 'term'>Eye Color:</span>
                            <span>{person.eye_color}</span>
                        </ListGroup>
                    </ul>
                </div>
            </PersonDetails>
        );
    }

    return (
        <div>Something went wrong</div>
    );
};
