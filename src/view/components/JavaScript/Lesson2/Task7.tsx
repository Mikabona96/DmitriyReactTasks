import React, { FC } from 'react';

export const Task7: FC = () => {
    const array = [ 1, 2, 3, 4 ];

    let sum = 0;

    for (let num of array) {
        if (num % 2 === 0) {
            sum += num;
        }
    }

    console.log(sum);


    return (
        <h1>
            Task 7 result in console
        </h1>
    );
};
