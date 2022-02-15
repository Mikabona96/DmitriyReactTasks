import React, { FC } from 'react';

export const Task6: FC = () => {
    const isEven = (num: number) => {
        if (num % 2 === 0) {
            console.log(true);

            return true;
        } else if (typeof num === 'string') {
            throw new Error('parameter type is not a Number');
        }
        console.log(false);

        return false;
    };
    /* не удалять */
    isEven(3); // false
    isEven(4); // true
    // isEven('Content'); // Error: parameter type is not a Number

    return (
        <div>
            <h3>Task 6</h3>
            <div>
                Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
                * Если чётное — функция возвращает `true`, если нечётное — `false`
                <p>
                    Условия:
                    * - Функция принимает один параметр;
                    * - Функция содержит проверку входного параметра на тип number. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
