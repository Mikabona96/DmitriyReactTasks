import React, { FC } from 'react';

export const Task2: FC = () => {
    type One = number[][][]
    type Two = number[][][][][]
    type Three = (number | (number | number[][][])[])[]
    type Four = never[][][][][]
    type Five = (number | never[])[][][][]


    function collect(arr: One | Two | Three | Four | Five) {
        if (arguments.length !== 1) {
            throw new Error('При вызове функции не был передан один аргумент');
        } else if (!Array.isArray(arr)) {
            throw new Error('В качестве первого аргумента был передан не массив');
        }
        for (let item of arr.flat(Infinity)) {
            if (typeof item !== 'number' || Array.isArray(item)) {
                throw new Error('на каком-то уровне было найдено не число и не массив.');
            }
        }

        return arr.flat(Infinity).reduce((prev: number, next) => typeof next === 'number' ? prev + next : 0, 0);
    }

    const array1 = [[[ 1, 2 ], [ 1, 2 ]], [[ 2, 1 ], [ 1, 2 ]]];
    console.log(collect(array1)); // 12

    const array2 = [[[[[ 1, 2 ]]]]];
    console.log(collect(array2)); // 3

    const array3 = [[[[[ 1, 2 ]]], 2 ], 1 ];
    console.log(collect(array3)); // 6

    const array4 = [[[[[]]]]];
    console.log(collect(array4)); // 0

    const array5 = [[[[[], 3 ]]]];
    console.log(collect(array5)); // 3

    return (
        <h1>
            Task 2 result in console
        </h1>
    );
};
