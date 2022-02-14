import React, { FC } from 'react';

export const Task2: FC = () => {
    const array = [ 'Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!' ];

    // Решение
    function filter (arr: (string | number)[], fn: Function) {
        if (arguments.length !== 2) {
            throw new Error('При вызове функции не было передано два аргумента');
        }


        if (typeof fn !== 'function') {
            throw new Error('В качестве второго аргумента была передана не функция');
        }

        if (Array.isArray(arr) === false) {
            throw new Error('В качестве первого аргумента был передан не массив');
        }

        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            let item = fn(arr[ i ], i, arr);

            // eslint-disable-next-line no-undefined
            if (item !== undefined && typeof item === 'string' && item.length > 1) {
                newArr.push(item);
            }
        }

        return newArr;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const filteredArray = filter(array, function(item: string, i: number | null = null, arrayRef = null) {
        return item;
    });

    console.log(filteredArray); // ['Добрый вечер!']

    return (
        <h1>
            Task 2 result in console
        </h1>
    );
};
