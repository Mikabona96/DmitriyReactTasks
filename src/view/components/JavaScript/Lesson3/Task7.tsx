/* eslint-disable max-len */
import React, { FC } from 'react';

export const Task7: FC = () => {
    const getDivisors = (elem: number) => {
        const arr = [];

        if (typeof elem === 'string') {
            throw new Error('parameter type is not a Number');
        }

        for (let i = 0; i <= elem; i++) {
            if (elem % i === 0) {
                arr.push(i);
            }
        }
        console.log(arr);
    };
    /* не удалять */
    getDivisors(12); // [1, 2, 3, 4, 6, 12]
    // getDivisors('Content'); // Error: parameter type is not a Number
    // getDivisors(0); // Error: parameter can't be a 0

    return (
        <div>
            <h3>Task 7</h3>
            <div>
                Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
                * Если чётное — функция возвращает `true`, если нечётное — `false`.
                <p>
                    Условия:
                    * - Входной параметр должен обладать типом number;
                    * - Входной параметр должен быть больше 0. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
