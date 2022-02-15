import React, { FC } from 'react';

export const Task1: FC = () => {
    const f = (num: number) => {
        if (isNaN(num)) {
            throw new Error('parameter type is not a Number');
        }
        console.log(Math.pow(num, 3));
    };

    /* не удалять */
    f(2); // 8
    // f('Content'); // Error: parameter is not a number type


    return (
        <div>
            <h3>Task 1</h3>
            <div>
                Создайте функцию `f`, которая возвращает куб числа.
                <div>
                    Условия:
                    * - Функция принимает один параметр;
                    * - Функция содержит проверку входного параметра на тип number. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </div>
            </div>
        </div>
    );
};
