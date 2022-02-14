import React, { FC } from 'react';

export const Task1: FC = () => {
    const array = [
        false,
        'Привет.',
        2,
        'Здравствуй.',
        [],
        'Прощай.',
        {
            name:    'Уолтер',
            surname: 'Уайт',
        },
        'Приветствую.',
    ];


    // Решение

    type ArrayType = (string | number | boolean | never[] | {
        name: string;
        surname: string;
    })[]

    const inspect = (arr: ArrayType) => arr.filter((str) => typeof str === 'string').map((str) => typeof str === 'string' ? str.length : null);

    const result = inspect(array);
    console.log(result); // [ 7, 11, 7, 12 ]


    return (
        <h1>
            Task 1 result in console
        </h1>
    );
};
