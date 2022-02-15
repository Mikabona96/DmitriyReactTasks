import React, { FC } from 'react';

export const Task1: FC = () => {
    const array = [
        false,
        'Привет.',
        2,
        'Здравствуй.',
        [],
        'Прощай.',
        {
            name:    'Уолтер',
            surname: 'Уайт',
        },
        'Приветствую.',
    ];


    // Решение

    type ArrayType = (string | number | boolean | never[] | {
        name: string;
        surname: string;
    })[]

    const inspect = (arr: ArrayType) => arr.filter((str) => typeof str === 'string').map((str) => typeof str === 'string' ? str.length : null);

    const result = inspect(array);
    console.log(result); // [ 7, 11, 7, 12 ]


    return (
        <div>
            <h1>Задача 1.</h1>
            <div>
                * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
                * и возвращать новый массив.
                * Этот новый массив должен содержать исключительно длины строк, которые были в
                * переданном массиве.
                * Если строк в переданном массиве не было — нужно вернуть пустой массив.
                *
                * Условия:
                * - Обязательно использовать встроенный метод массива filter;
                * - Обязательно использовать встроенный метод массива map.
                *
                * Генерировать ошибки, если:
                * - При вызове функции не был передан один аргумент;
                * - В качестве первого аргумента был передан не массив.
                */
            </div>
        </div>
    );
};
