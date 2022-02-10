import React, { FC } from 'react';

export const Task5: FC = () => {
    var i = 0;
    while (i < 3) {
        console.log('номер ' + i + '!');
        // eslint-disable-next-line no-plusplus
        i++;
    }


    return (
        <h1>
            Task 5 result in console
        </h1>
    );
};
