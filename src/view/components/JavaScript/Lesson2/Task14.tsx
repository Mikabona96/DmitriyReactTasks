import React, { FC } from 'react';

export const Task14: FC = () => {
    let n = 1000;
    let count = 0;


    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (n < 50) {
            break;
        }
        n /= 2;
        // eslint-disable-next-line no-plusplus
        count++;
    }

    console.log(count);

    return (
        <h1>
            Task 14 result in console
        </h1>
    );
};
