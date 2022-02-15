import React, { FC } from 'react';

export const Task3: FC = () => {
    const createFibonacciGenerator = () => {
        let a = 0;
        let b = 1;

        return {
            print() {
                [ a, b ] = [ b, a + b ];

                return a;
            },
            reset() {
                a = 0;
                b = 1;
            },
        };
    };

    const generator1 = createFibonacciGenerator();

    console.log(generator1.print()); // 1
    console.log(generator1.print()); // 1
    console.log(generator1.print()); // 2
    console.log(generator1.print()); // 3
    console.log(generator1.reset()); // undefined
    console.log(generator1.print()); // 1
    console.log(generator1.print()); // 1
    console.log(generator1.print()); // 2

    return (
        <div>
            <h1>Задача 3.</h1>
            <div>
                * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
                *
                * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
                * - print — возвращает число из последовательности Фибоначчи;
                * - reset — обнуляет последовательность и ничего не возвращает.
                *
                * Условия:
                * - Задачу нужно решить с помощью замыкания.
                */
            </div>
        </div>
    );
};

