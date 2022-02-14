import React, { FC } from 'react';

export const Task4: FC = () => {
    const compose = (...rest: Function[]) => {
        return (letter = '') => {
            return rest.reduceRight((prev, next) => {
                if (typeof next !== 'function') {
                    throw new Error('Один из аргументов функции calculate() не является функцией');
                }
                if (typeof next() === 'undefined') {
                    throw new Error('Одна функция из аргументов не вернула значение');
                }

                return next(prev);
            }, letter);
        };
    };

    const result1 = compose(
        (prevResult: string) => prevResult + 'o',
        (prevResult: string) => prevResult + 'l',
        (prevResult: string) => prevResult + 'l',
        (prevResult: string) => prevResult + 'e',
    )('h');
    const result2 = compose(
        (prevResult: string) => prevResult + 'o',
        (prevResult: string) => prevResult + 'l',
        (prevResult: string) => prevResult + 'l',
        (prevResult: string) => prevResult + 'e',
        () => 'h',
    )();

    console.log(result1); // 'hello'
    console.log(result2); // 'hello'


    return (
        <h1>
            Task 4 result in console
        </h1>
    );
};
