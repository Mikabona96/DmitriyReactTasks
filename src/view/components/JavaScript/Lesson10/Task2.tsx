import React, { FC } from 'react';

export const Task2: FC = () => {
    const calculate = (...rest: Function[]) => {
        return rest.reduce((prev, next) => {
            if (typeof next !== 'function') {
                throw new Error('Один из аргументов функции calculate() не является функцией');
            }
            if (typeof next() === 'undefined') {
                throw new Error('Одна функция из аргументов не вернула значение');
            }

            return next(prev);
        }, 0);
    };

    const result = calculate(
        () => {
            return 7;
        },
        (prevResult: number) => {
            return prevResult + 4;
        },
        (prevResult: number) => {
            return prevResult * 5;
        },
    );

    console.log(result); // 55

    return (
        <h1>
            Task 2 result in console
        </h1>
    );
};
