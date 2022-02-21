/* eslint-disable react/no-unused-prop-types */
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useFilmFetch } from '../hooks/useFilmFetch';
import { PersonDetails, PersonImage, ListGroup } from '../styles';


export const Film: FC = (): any=>{
    const location = useLocation();
    const idRegExp = /\/([0-9]*)\/$/;
    const path: any =  location.pathname + '/';
    const id = path.match(idRegExp)[ 1 ];
    const film = useFilmFetch(id);
    console.log(film);
    if (film) {
        return (
            <PersonDetails>
                <PersonImage
                    alt = 'character'
                    src = { `https://starwars-visualguide.com/assets/img/films/${id}.jpg` }
                />

                <div>
                    <h4>Title: {film.title}</h4>
                    <ul>
                        <ListGroup>
                            <span className = 'term'>Opening crawl:</span>
                            <br />
                            <span>{film.opening_crawl}</span>
                        </ListGroup>
                        <ListGroup>
                            <span className = 'term'>Director:</span>
                            <span>{film.director}</span>
                        </ListGroup>
                        <ListGroup>
                            <span className = 'term'>Eye Color:</span>
                            <span>{film.release_date}</span>
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
