import React, { FC } from 'react';

export const Task3: FC = () => {
    type Items = {
        index: number,
        name: string,
        message: string
    }

    type Acc = {
        value: number,
        errors: never[] | Items[]
    }

    const calculateAdvanced = (...rest: Function[]) => {
        let acc: Acc = {
            value:  0,
            errors: [],
        };

        for (let i = 0; i < rest.length; i++) {
            try {
                if (typeof rest[ i ] !== 'function') {
                    throw new Error(`Аргумент под №${i} не является функцией`);
                }
                if (typeof rest[ i ]() === 'undefined') {
                    throw new Error(`Callback at index ${i} did not return any value.`);
                }
                if (typeof rest[ i ]() !== 'undefined') {
                    acc.value = rest[ i ](acc.value);
                }
            } catch (error) {
                if (error instanceof Error) {
                    const newObject: Items = { name: error.name, index: i, message: error.message };
                    acc.errors = [ ...acc.errors, newObject ];
                }
            }
        }

        return acc;
    };


    const result = calculateAdvanced(
        // eslint-disable-next-line no-empty-function
        () => {},
        () => {
            return 7;
        },
        // eslint-disable-next-line no-empty-function
        () => {},
        (prevResult: number) => {
            return prevResult + 4;
        },
        () => {
            throw new RangeError('Range is too big.');
        },
        (prevResult: number) => {
            return prevResult + 1;
        },
        () => {
            throw new ReferenceError('ID is not defined.');
        },
        (prevResult: number) => {
            return prevResult * 5;
        },
    );

    console.log(result);

    return (
        <div>
            <h1>Задача 3.</h1>
            <div>
                * Улучшите имплементацию функции calculate() и назовите её calculateAdvanced().
                * Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.
                *
                * После отлова ошибки перейдите к выполнению следующего коллбека.
                *
                * Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами:
                `value` и `errors`:
                * - свойство `value` содержит результат вычисления всех функций из цепочки;
                * - свойство `errors` содержит массив с объектами, где каждый объект должен обладать
                следующими свойствами:
                *     - index — индекс коллбека, на котором ошибка была возбуждена;
                *     - name — имя ошибки;
                *     - message — сообщение ошибки.
                *
                * Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.
                *
                * Поэтому, для продолжения цепочки выполнения
                * необходимо брать результат последней успешно выполненной функции-коллбека.
                *
                * Генерировать ошибки если:
                * - Любой из аргументов не является функцией.
                */
            </div>
        </div>
    );
};

