import React, { FC } from 'react';

export const Task8: FC = () => {
    let i = 0;

    const f = (arr: number[]) => {
        if (arr.length === 0) {
            throw new Error('parameter can\'t be an empty');
        } else if (typeof arr === 'string') {
            throw new Error('parameter type should be an array');
        } else if (!Array.isArray(arr)) {
            throw new Error('parameter type should be an array');
        } else if (i === arr.length) {
            return;
        }

        console.log(arr[ i ]);
        // eslint-disable-next-line no-plusplus
        i++;
        f(arr);
    };
    /* не удалять */
    f([ 1, 2, 3 ]);
    // 1
    // 2
    // 3
    // f(1, 2, 3); // Error: parameter type should be an array
    // f('Content'); // Error: parameter type should be an array
    // f([]); // Error: parameter can't be an empty

    return (
        <div>
            <h3>Task 8</h3>
            <div>
                Дан массив с числами `[1, 2, 3]`.
                * Создайте функцию `f`, которая принимает массив в качестве параметра,
                * а затем последовательно выводит на экран его элементы.
                <p>
                    Условия:
                    * - Входной параметр должен быть не пустым массивом;
                    * - Обязательно использовать рекурсию;
                    * - Использовать цикл запрещено. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
