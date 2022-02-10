import React, { FC } from 'react';

export const Task6: FC = () => {
    const array = [ 1, 2, 3, 4 ];

    let sum = 0;

    for (let num of array) {
        sum += num;
    }

    console.log(sum);


    return (
        <h1>
            Task 6 result in console
        </h1>
    );
};
