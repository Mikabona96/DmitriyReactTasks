/* eslint-disable max-len */
import React, { FC } from 'react';

export const Task14: FC = () => {
    let n = 1000;
    let count = 0;


    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (n < 50) {
            break;
        }
        n /= 2;
        // eslint-disable-next-line no-plusplus
        count++;
    }

    console.log(count);

    return (
        <div>
            <h3>Component: Task 14</h3>
            <div>
                Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
