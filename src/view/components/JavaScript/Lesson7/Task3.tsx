import React, { FC } from 'react';

export const Task3: FC = () => {
    const createArray = (filler: string, quantity: number) => {
        return new Array(quantity).fill(filler);
    };
    const result = createArray('x', 5);

    console.log(result); // [ x, x, x, x, x ]


    return (
        <h1>
            Task 3 result in console
        </h1>
    );
};
