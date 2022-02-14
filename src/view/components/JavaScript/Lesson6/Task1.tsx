import React, { FC } from 'react';

export const Task1: FC = () => {
    const array = [ 1, 2, 3 ];

    // Решение
    function forEach (arr: number[], fn: Function) {
        if (arguments.length !== 2) {
            throw new Error('При вызове функции не было передано два аргумента');
        }


        if (typeof fn !== 'function') {
            throw new Error('В качестве второго аргумента была передана не функция');
        }

        if (Array.isArray(arr) === false) {
            throw new Error('В качестве второго аргумента был передан не массив');
        }
        for (let i = 0; i < arr.length; i++) {
            fn(arr[ i ], i, arr);
        }
    }

    const result = forEach(array, (item: number, index = null, arrayRef = null) => {
        console.log(`Index: ${index}, Element: ${item}, Array: ${arrayRef}`);
    });

    console.log(result); // undefined

    return (
        <h1>
            Task 1 result in console
        </h1>
    );
};
