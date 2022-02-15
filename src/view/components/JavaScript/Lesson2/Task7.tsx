import React, { FC } from 'react';

export const Task7: FC = () => {
    const array = [ 1, 2, 3, 4 ];

    let sum = 0;

    for (let num of array) {
        if (num % 2 === 0) {
            sum += num;
        }
    }

    console.log(sum);


    return (
        <div>
            <h3>Component: Task 7</h3>
            <div>
                Напишите код, который посчитает сумму всех парных элементов в массиве.
                Использовать встроенные методы массивов — нельзя.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
