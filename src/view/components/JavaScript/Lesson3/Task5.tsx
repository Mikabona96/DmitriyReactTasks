import React, { FC } from 'react';

export const Task5: FC = () => {
    const array = [ 1, 2, -4, 3, -9, -1, 7 ];

    // Решение

    const newArr = [];

    const isPositive = (el: number) => {
        if (typeof el === 'string') {
            throw new Error('parameter type is not a Number');
        }
        if (el >= 0) {
            return true;
        }

        return false;
    };

    for (let i = 0; i < array.length; i++) {
        if (isPositive(array[ i ])) {
            newArr.push(array[ i ]);
        }
    }
    console.log(newArr);

    /* не удалять */
    isPositive(-3); // false
    isPositive(3); // true
    // isPositive('s'); // Error: parameter type is not a Number

    return (
        <div>
            <h3>Task 5</h3>
            <div>
                Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
                * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
                * Создайте для этого вспомогательную функцию `isPositive(-3)`,
                * которая параметром будет принимать число и возвращать true,
                * если число положительное, и false — если отрицательное.
                <p>
                    Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
                    * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
                    * Создайте для этого вспомогательную функцию `isPositive(-3)`,
                    * которая параметром будет принимать число и возвращать true,
                    * если число положительное, и false — если отрицательное. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
