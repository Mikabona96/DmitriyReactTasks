import React, { FC } from 'react';


const send = (url: string) => {
    return new Promise(async (resolve, reject) => {
        const res = await fetch(url);
        if (res.status === 200) {
            resolve(res.json());
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(`We have error, status code: ${res.status}`);
    });
};


const url = 'https://jsonplaceholder.typicode.com/todos/1';


export const Task3: FC = () => {
    send(url)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <h1>
            Task 3 result in console
        </h1>
    );
};

