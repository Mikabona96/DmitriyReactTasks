import React, { FC } from 'react';

export const Task12: FC = () => {
    const array = [ 2, -1, -3, 15, 0, 4 ];
    let sum = 0;

    for (let num of array) {
        if (num > 0 && num !== Infinity) {
            sum += num;
        }
    }

    console.log(sum);

    return (
        <div>
            <h3>Component: Task 12</h3>
            <div>
                Найдите сумму положительных элементов массива.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
