import React, { FC } from 'react';

export const Task1: FC = () => {
    const f = (num: number) => {
        if (isNaN(num)) {
            throw new Error('parameter type is not a Number');
        }
        console.log(Math.pow(num, 3));
    };

    /* не удалять */
    f(2); // 8
    // f('Content'); // Error: parameter is not a number type


    return (
        <h1>
            Task 1 result in console
        </h1>
    );
};
