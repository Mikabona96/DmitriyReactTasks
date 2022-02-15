import React, { FC } from 'react';

export const Task2: FC = () => {
    const createFibonacciGenerator = () => {
        let a = 0;
        let b = 1;

        return () => {
            [ a, b ] = [ b, a + b ];

            return a;
        };
    };

    const generateFibonacciNumber = createFibonacciGenerator();

    console.log(generateFibonacciNumber()); // 1
    console.log(generateFibonacciNumber()); // 1
    console.log(generateFibonacciNumber()); // 2
    console.log(generateFibonacciNumber()); // 3
    console.log(generateFibonacciNumber()); // 5
    console.log(generateFibonacciNumber()); // 8
    console.log(generateFibonacciNumber()); // 13

    return (
        <div>
            <h1>Задача 2.</h1>
            <div>
                * Создайте функцию createFibonacciGenerator(),
                * которая вернёт ещё одну функцию,
                * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
                *
                * Условия:
                * - Задачу нужно решить с помощью замыкания.
                */
            </div>
        </div>
    );
};
