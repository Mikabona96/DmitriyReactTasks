import React, { FC } from 'react';

export const Task2: FC = () => {
    var login = 'Pitter';

    // eslint-disable-next-line init-declarations
    var message;


    // eslint-disable-next-line no-nested-ternary
    login === 'Pitter' ? message = 'Hi' : login === 'Owner' ? message = 'Hello' : login === '' ? message = 'unknown' : message = '';


    console.log(message);


    return (
        <h1>
            Task 2 result in console
        </h1>
    );
};
