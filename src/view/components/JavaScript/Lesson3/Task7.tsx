import React, { FC } from 'react';

export const Task7: FC = () => {
    const getDivisors = (elem: number) => {
        const arr = [];

        if (typeof elem === 'string') {
            throw new Error('parameter type is not a Number');
        }

        for (let i = 0; i <= elem; i++) {
            if (elem % i === 0) {
                arr.push(i);
            }
        }
        console.log(arr);
    };
    /* не удалять */
    getDivisors(12); // [1, 2, 3, 4, 6, 12]
    // getDivisors('Content'); // Error: parameter type is not a Number
    // getDivisors(0); // Error: parameter can't be a 0

    return (
        <h1>
            Task 7 result in console
        </h1>
    );
};
