import React, { FC } from 'react';


class Countries {
    url: string
    constructor(url: string) {
        this.url = url;
    }

    send(num: number) {
        if (typeof num !== 'number') {
            throw new Error('Send method must have a typeof number parameter');
        }

        return new Promise(async (resolve, reject) => {
            if (typeof this.url !== 'string') {
                throw new TypeError('Url must be a string');
            }
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            const res = await fetch(url);
            if (res.status === 200) {
                resolve(res.json());
            }
            // eslint-disable-next-line prefer-promise-reject-errors
            reject(`We have error, status code: ${res.status}`);
        });
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts';
const countries = new Countries(url);


export const Task4: FC = () => {
    (async() => {
        try {
            const data = await countries.send(2);
            console.log(data); // массив стран
        } catch (error) {
            console.log(error);
        }
    })();

    return (
        <h1>
            Task 4 result in console
        </h1>
    );
};
