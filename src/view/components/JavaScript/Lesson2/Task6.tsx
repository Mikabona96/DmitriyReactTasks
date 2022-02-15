import React, { FC } from 'react';

export const Task6: FC = () => {
    const array = [ 1, 2, 3, 4 ];

    let sum = 0;

    for (let num of array) {
        sum += num;
    }

    console.log(sum);


    return (
        <div>
            <h3>Component: Task 6</h3>
            <div>
                Написать код который посчитает сумму всех элементов в массиве.
                Использовать встроенные методы массивов — нельзя.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
