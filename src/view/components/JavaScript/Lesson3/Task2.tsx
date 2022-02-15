import React, { FC } from 'react';

export const Task2: FC = () => {
    const f = (...params: number[]) => {
        let total = 0;
        for (let el of params) {
            if (typeof el !== 'number') {
                throw new Error('all parameters should be a Number type');
            }
            total += el;
        }
        console.log(total);
    };

    /* не удалять */
    f(1, 2, 3); // 6
    f(1, 1, 1, 1, 1, 1, 1, 1); // 8
    // f(1, 2, 's', 4); // Error: all parameters should be a Number type

    return (
        <div>
            <h3>Task 2</h3>
            <div>
                Создайте функцию `f`, которая возвращает сумму всех параметров.
                <div>
                    Условия:
                    * - Функция принимает любое количество параметров;
                    * - Функция содержит проверку входных параметров на тип number. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </div>
            </div>
        </div>
    );
};
