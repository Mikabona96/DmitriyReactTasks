import React, { FC } from 'react';

export const Task3: FC = () => {
    const f = (first: number, second: number, third: number) => {
        if (typeof first === 'number' && typeof second === 'number' && typeof third === 'number') {
            console.log((first - second) / third);
        } else {
            throw new Error('all parameters type should be a Number');
        }
    };
    /* не удалять */
    f(9, 3, 2); // 3
    // f('s', 9, 3); // Error: all parameters type should be a Number

    return (
        <div>
            <h3>Task 3</h3>
            <div>
                Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
                <div>
                    Условия:
                    * - Функция принимает три параметра;
                    * - Функция содержит проверку входных параметров на тип number.<br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </div>
            </div>
        </div>
    );
};
