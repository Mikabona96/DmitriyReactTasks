import React, { FC } from 'react';

export const Task2: FC = () => {
    const f = (...params: number[]) => {
        let total = 0;
        for (let el of params) {
            if (typeof el !== 'number') {
                throw new Error('all parameters should be a Number type');
            }
            total += el;
        }
        console.log(total);
    };

    /* не удалять */
    f(1, 2, 3); // 6
    f(1, 1, 1, 1, 1, 1, 1, 1); // 8
    // f(1, 2, 's', 4); // Error: all parameters should be a Number type

    return (
        <h1>
            Task 2 result in console
        </h1>
    );
};
