/* eslint-disable max-len */
import React, { FC } from 'react';

export const Task4: FC = () => {
    const PRICE = '$120';

    // Решение
    const extractCurrencyValue = (source: string) => {
        if (typeof source !== 'string') {
            return;
        }

        return Number(source.slice(1));
    };
    console.log(extractCurrencyValue(PRICE)); // 120

    return (
        <div>
            <h1>Задача 4.</h1>
            <div>
                Дана стоимость в виде строки: `"$120"`.
                * Первый символ — валюта, затем – число.
                * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
                * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
                *
                * Условия:
                * - Функция принимает один параметр;
                * - Функция содержит валидацию входного параметра на тип string.
            </div>
        </div>
    );
};
