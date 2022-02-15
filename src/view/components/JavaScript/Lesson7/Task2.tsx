import React, { FC } from 'react';

export const Task2: FC = () => {
    type One = number[][][]
    type Two = number[][][][][]
    type Three = (number | (number | number[][][])[])[]
    type Four = never[][][][][]
    type Five = (number | never[])[][][][]


    function collect(arr: One | Two | Three | Four | Five) {
        if (arguments.length !== 1) {
            throw new Error('При вызове функции не был передан один аргумент');
        } else if (!Array.isArray(arr)) {
            throw new Error('В качестве первого аргумента был передан не массив');
        }
        for (let item of arr.flat(Infinity)) {
            if (typeof item !== 'number' || Array.isArray(item)) {
                throw new Error('на каком-то уровне было найдено не число и не массив.');
            }
        }

        return arr.flat(Infinity).reduce((prev: number, next) => typeof next === 'number' ? prev + next : 0, 0);
    }

    const array1 = [[[ 1, 2 ], [ 1, 2 ]], [[ 2, 1 ], [ 1, 2 ]]];
    console.log(collect(array1)); // 12

    const array2 = [[[[[ 1, 2 ]]]]];
    console.log(collect(array2)); // 3

    const array3 = [[[[[ 1, 2 ]]], 2 ], 1 ];
    console.log(collect(array3)); // 6

    const array4 = [[[[[]]]]];
    console.log(collect(array4)); // 0

    const array5 = [[[[[], 3 ]]]];
    console.log(collect(array5)); // 3

    return (
        <div>
            <h1>Задача 2.</h1>
            <div>
                * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
                * и возвращать число.
                * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
                * Число, которое возвращает функция должно быть суммой всех элементов
                * на всех уровнях всех вложенных массивов.
                *
                * Если при проходе всех уровней не было найдено ни одного числа,
                * то функция должна возвращать число 0.
                *
                * Условия:
                * - Обязательно использовать встроенный метод массива reduce.
                *
                * Генерировать ошибки, если:
                * - При вызове функции не был передан один аргумент;
                * - В качестве первого аргумента был передан не массив;
                * - Если на каком-то уровне было найдено не число и не массив.
                */
            </div>
        </div>
    );
};
