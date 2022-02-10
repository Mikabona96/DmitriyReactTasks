import React, { FC } from 'react';

export const Task13: FC = () => {
    const arr = [ 1, 2, 5, 9, 4, 13, 4, 10 ];

    for (let i = 0; i < arr.length; i++) {
        if (arr[ i ] === 4) {
            console.log('Есть!');
            break;
        }
    }

    return (
        <h1>
            Task 13 result in console
        </h1>
    );
};
