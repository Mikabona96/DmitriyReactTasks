import React, { FC } from 'react';

export const Task3: FC = () => {
    const f = (first: number, second: number, third: number) => {
        if (typeof first === 'number' && typeof second === 'number' && typeof third === 'number') {
            console.log((first - second) / third);
        } else {
            throw new Error('all parameters type should be a Number');
        }
    };
    /* не удалять */
    f(9, 3, 2); // 3
    // f('s', 9, 3); // Error: all parameters type should be a Number

    return (
        <h1>
            Task 3 result in console
        </h1>
    );
};
