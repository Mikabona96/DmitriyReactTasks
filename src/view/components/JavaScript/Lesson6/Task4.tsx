import React, { FC } from 'react';

export const Task4: FC = () => {
    const array = [ 1, 2, 'Добро пожаловать.', 4, 5, 6 ];

    // Решение

    function some (arr: (string | number)[], fn: Function) {
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
            let item = fn(arr[ i ], i, arr);

            if (item) {
                return true;
            }
        }

        return false;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = some(array, function(item: string | number, i = null, arrayRef = null) {
        return typeof item === 'string';
    });

    console.log(result); // true

    return (
        <div>
            <h1>Задача 4.</h1>
            <div>
                * Вручную создать имплементацию функции `some`.
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
