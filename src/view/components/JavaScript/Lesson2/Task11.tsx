import React, { FC } from 'react';

export const Task11: FC = () => {
    const array = [ 2, 5, 9, 15, 0, 4 ];

    for (let num of array) {
        if (num > 3 && num < 10) {
            console.log(num);
        }
    }


    return (
        <h1>
            Task 11 result in console
        </h1>
    );
};
