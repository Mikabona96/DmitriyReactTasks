/* eslint-disable max-len */
import React, { FC } from 'react';

export const Task4: FC = () => {
    const compose = (...rest: Function[]) => {
        return (letter = '') => {
            return rest.reduceRight((prev, next) => {
                if (typeof next !== 'function') {
                    throw new Error('Один из аргументов функции calculate() не является функцией');
                }
                if (typeof next() === 'undefined') {
                    throw new Error('Одна функция из аргументов не вернула значение');
                }

                return next(prev);
            }, letter);
        };
    };

    const result1 = compose(
        (prevResult: string) => prevResult + 'o',
        (prevResult: string) => prevResult + 'l',
        (prevResult: string) => prevResult + 'l',
        (prevResult: string) => prevResult + 'e',
    )('h');
    const result2 = compose(
        (prevResult: string) => prevResult + 'o',
        (prevResult: string) => prevResult + 'l',
        (prevResult: string) => prevResult + 'l',
        (prevResult: string) => prevResult + 'e',
        () => 'h',
    )();

    console.log(result1); // 'hello'
    console.log(result2); // 'hello'


    return (
        <div>
            <h1>Задача 4.</h1>
            <div>
                * Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
                *
                * При запуске compose() последовательно запускает коллбек-функции из аргументов.
                *
                * Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
                *
                * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
                * То есть возвращаемое значение каждой коллбек-функции из цепочки
                * становится доступным из параметра следующей коллбек-функции в цепочке.
                *
                * Функция compose() возвращает ещё одну функцию с одним параметром.
                * Значение, переданное этой функции в качестве аргумента должно стать
                * параметром первой коллбек-функции в цепочке выполнения функции compose().
                *
                * Итого, подпись функции compose: `compose(f, g)(x) = f(g(x))`.
                *
                * Генерировать ошибки если:
                * - Любой из аргументов не является функцией;
                * - Любая функция из аргументов не вернула значение.
                *
                * Заметка:
                * Если функции, которая является возвращаемым значением compose()
                * не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
                */
            </div>
        </div>
    );
};
