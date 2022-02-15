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
        <div>
            <h1>Задача 1.</h1>
            <div>
                Вручную создать имплементацию функции `forEach`.
                * Логика работы ручной имплементации должна быть такой-же,
                * как и у встроенного метода.
                *
                * Генерировать ошибки, если:
                * - При вызове функции не было передано два аргумента;
                * - В качестве первого аргумента был передан не массив;
                * - В качестве второго аргумента была передана не функция.
                */
            </div>
        </div>
    );
};
