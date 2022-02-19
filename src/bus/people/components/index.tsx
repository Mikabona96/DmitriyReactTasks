/* eslint-disable react/no-unused-prop-types */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PersonDetails, PersonImage, ListGroup } from '../styles';


export const Person: FC = (): any=>{
    const location = useLocation();
    const idRegExp = /\/([0-9]*)\/$/;
    const path: any =  location.pathname + '/';
    const id = path.match(idRegExp)[ 1 ];
    const currentPerson = useSelector((state: any) => state.peopleReducer.currentPerson);

    if (currentPerson) {
        const { name, gender, birth_year, eye_color } = currentPerson;

        return (
            <PersonDetails>
                <PersonImage
                    alt = 'character'
                    src = { `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }
                />

                <div>
                    <h4>{name}</h4>
                    <ul>
                        <ListGroup>
                            <span className = 'term'>Gender:</span>
                            <span>{gender}</span>
                        </ListGroup>
                        <ListGroup>
                            <span className = 'term'>Birth Year:</span>
                            <span>{birth_year}</span>
                        </ListGroup>
                        <ListGroup>
                            <span className = 'term'>Eye Color:</span>
                            <span>{eye_color}</span>
                        </ListGroup>
                    </ul>
                </div>
            </PersonDetails>
        );
    }
};
