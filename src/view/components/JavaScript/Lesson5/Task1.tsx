import React, { FC } from 'react';

export const Task1: FC = () => {
    const upperCaseFirst = (str: string) => str.length === 0 || typeof str !== 'string' ? null : str[ 0 ].toUpperCase() + str.slice(1);

    console.log(upperCaseFirst('pitter'));

    console.log(upperCaseFirst(''));

    return (
        <div>
            <h1>Задача 1.</h1>
            <div>
                Напишите функцию upperCaseFirst(string).
                Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.

                Условия:
                - Функция принимает один параметр;
                - Функция содержит валидацию входного параметра на тип string.
            </div>
        </div>
    );
};
