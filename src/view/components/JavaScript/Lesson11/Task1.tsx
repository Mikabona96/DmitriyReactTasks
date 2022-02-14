import React, { FC } from 'react';

export const Task1: FC = () => {
    const createNumberGenerator = () => {
        // if (arr.length > 100) {
        //         throw new Error('Функция была вызвана, когда доступные для выведения числа закончились')
        //     }
        const arr: number[] = [];

        return function callBackFunction(): Function | number {
            let random = Math.floor(Math.random() * 100);
            if (arr.includes(random)) {
                return callBackFunction();
            }
            arr.push(random);


            return random;
        };
    };

    const TOTAL_ITERATIONS = 101;
    let invocations = 0;
    const generateNumber = createNumberGenerator();

    try {
        for (let iteration = 1; iteration < TOTAL_ITERATIONS; iteration++) {
            console.log(`Iteration: ${iteration}. Number: ${generateNumber()}`);
            invocations += 1;
        }
    } catch {
        console.log('Error caught.');
        console.log(
            `Function generated an error after ${invocations} invocations.`,
        );
    }


    return (
        <h1>
            Task 1 result in console
        </h1>
    );
};
