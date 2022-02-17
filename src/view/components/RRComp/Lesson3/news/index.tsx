/* eslint-disable max-len */
import React, { FC } from 'react';
import { Article } from '../article';
import { Cards } from './styles';
import { useApiLoader } from './useApiLoader';

interface Item {
    name: string;
    id: number;
    phone: string;
    website: string;
    email: string;
    address?: {
        city: string;
        geo: {
            lat: string;
            lng: string;
        }
        street: string;
        suite: string;
        zipcode: string;
    };
    company: {
        name: string;
        bs: string;
        catchPhrase: string;
    }
}

export const News: FC = () => {
    const { db, isServerError, isClientError } = useApiLoader();
    const articleJSX = Array.isArray(db) && db.map((item: Item) => {
        return (
            <Article
                key = { item.id }
                { ...item }
            />
        );
    });


    return (
        <section>
            {
                isServerError && isClientError ? <h1>Сервер не отвечает....</h1> : (<><h3>News</h3> <Cards>{articleJSX}</Cards></>)
            }
        </section>
    );
};
