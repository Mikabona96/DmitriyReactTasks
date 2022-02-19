import React from 'react';
import {useStarshipsFetch} from './hooks/useStarshipsFetch';

export const Starships = ()=>{
    const {isFetching, data, error} = useStarshipsFetch();

    if(error && error.status ===404){
        return <p>Not Found !</p>;
    }

    if(error && error.status !== 404){
        return <p>Something went wrong !</p>;
    }

    const spinnerJSX = isFetching && (
        <p>Loading data from api !</p>
    );

    const listJSX = !isFetching && data && data.length && data.map(({name, model}, index)=>{
        return (
            <p key = {String(index)}>
                <span>Name: {name}</span>
                <br/>
                <span>Model: {model}</span>
            </p>
        );
    });

    return (
        <>
            <h1>Starships</h1>
            {spinnerJSX}
            {listJSX}
        </>
    )
}