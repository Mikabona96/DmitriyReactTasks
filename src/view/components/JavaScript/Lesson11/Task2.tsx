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
        <h1>
            Task 2 result in console
        </h1>
    );
};
