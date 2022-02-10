import React, { FC } from 'react';

export const Task6: FC = () => {
    const isEven = (num: number) => {
        if (num % 2 === 0) {
            console.log(true);

            return true;
        } else if (typeof num === 'string') {
            throw new Error('parameter type is not a Number');
        }
        console.log(false);

        return false;
    };
    /* не удалять */
    isEven(3); // false
    isEven(4); // true
    // isEven('Content'); // Error: parameter type is not a Number

    return (
        <h1>
            Task 6 result in console
        </h1>
    );
};
