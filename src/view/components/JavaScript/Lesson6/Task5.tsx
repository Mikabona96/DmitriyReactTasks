import React, { FC } from 'react';

export const Task5: FC = () => {
    const array = [ 1, 2, 3, 4, 5 ];
    const INITIAL_ACCUMULATOR = {};

    // Решение
    function reduce(arr: number[], fn: Function, acc: any) {
        let res = acc;

        for (let i = 0; i < arr.length; i++) {
            let data = fn(acc, arr[ i ], i, arr);
            if (typeof data === 'object') {
                res = { ...res, ...fn(acc, arr[ i ], i, arr) };
            }
        }

        return res;
    }
    const result = reduce(
        array,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        function(accumulator: object, item: number, idx: number, arrayRef: number[]) {
            return { [ idx ]: item };
        },
        INITIAL_ACCUMULATOR,
    );

    console.log(result);

    return (
        <h1>
            Task 5 result in console any type in acc line 8
        </h1>
    );
};
