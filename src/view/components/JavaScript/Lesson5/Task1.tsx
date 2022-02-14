import React, { FC } from 'react';

export const Task1: FC = () => {
    const upperCaseFirst = (str: string) => str.length === 0 || typeof str !== 'string' ? null : str[ 0 ].toUpperCase() + str.slice(1);

    console.log(upperCaseFirst('pitter'));

    console.log(upperCaseFirst(''));

    return (
        <h1>
            Task 1 result in console
        </h1>
    );
};
