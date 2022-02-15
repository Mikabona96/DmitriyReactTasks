/* eslint-disable max-len */
import React, { FC } from 'react';

export const Task13: FC = () => {
    const arr = [ 1, 2, 5, 9, 4, 13, 4, 10 ];

    for (let i = 0; i < arr.length; i++) {
        if (arr[ i ] === 4) {
            console.log('Есть!');
            break;
        }
    }

    return (
        <div>
            <h3>Component: Task 13</h3>
            <div>
                С помощью цикла `for` и оператора `if` проверьте есть ли в массиве элемент со значением, равным 4. Если есть — выведите на экран `Есть!` и выйдите из цикла. Если нет - ничего делать не надо.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
