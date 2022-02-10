import React, { FC } from 'react';

export const Task8: FC = () => {
    let i = 0;

    const f = (arr: number[]) => {
        if (arr.length === 0) {
            throw new Error('parameter can\'t be an empty');
        } else if (typeof arr === 'string') {
            throw new Error('parameter type should be an array');
        } else if (!Array.isArray(arr)) {
            throw new Error('parameter type should be an array');
        } else if (i === arr.length) {
            return;
        }

        console.log(arr[ i ]);
        // eslint-disable-next-line no-plusplus
        i++;
        f(arr);
    };
    /* не удалять */
    f([ 1, 2, 3 ]);
    // 1
    // 2
    // 3
    // f(1, 2, 3); // Error: parameter type should be an array
    // f('Content'); // Error: parameter type should be an array
    // f([]); // Error: parameter can't be an empty

    return (
        <h1>
            Task 7 result in console
        </h1>
    );
};
