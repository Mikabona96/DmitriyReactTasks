import React, { FC } from 'react';

export const Task12: FC = () => {
    const array = [ 2, -1, -3, 15, 0, 4 ];
    let sum = 0;

    for (let num of array) {
        if (num > 0 && num !== Infinity) {
            sum += num;
        }
    }

    console.log(sum);

    return (
        <h1>
            Task 12 result in console
        </h1>
    );
};
