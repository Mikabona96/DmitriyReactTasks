import React, { FC } from 'react';

export const Task5: FC = () => {
    const array = [ 1, 2, -4, 3, -9, -1, 7 ];

    // Решение

    const newArr = [];

    const isPositive = (el: number) => {
        if (typeof el === 'string') {
            throw new Error('parameter type is not a Number');
        }
        if (el >= 0) {
            return true;
        }

        return false;
    };

    for (let i = 0; i < array.length; i++) {
        if (isPositive(array[ i ])) {
            newArr.push(array[ i ]);
        }
    }
    console.log(newArr);

    /* не удалять */
    isPositive(-3); // false
    isPositive(3); // true
    // isPositive('s'); // Error: parameter type is not a Number

    return (
        <h1>
            Task 5 result in console
        </h1>
    );
};
