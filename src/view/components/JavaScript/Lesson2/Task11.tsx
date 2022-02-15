/* eslint-disable max-len */
import React, { FC } from 'react';

export const Task11: FC = () => {
    const array = [ 2, 5, 9, 15, 0, 4 ];

    for (let num of array) {
        if (num > 3 && num < 10) {
            console.log(num);
        }
    }


    return (
        <div>
            <h3>Component: Task 11</h3>
            <div>
                С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
