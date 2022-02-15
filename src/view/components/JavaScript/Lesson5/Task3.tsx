/* eslint-disable max-len */
import React, { FC } from 'react';

export const Task3: FC = () => {
    const truncate = (string: string, maxLength: number): string | void => {
        if (typeof string === 'string' && typeof maxLength === 'number') {
            if (string.length > maxLength) {
                return `${string.slice(0, maxLength - 3)}...`;
            }
        }
    };

    console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'

    return (
        <div>
            <h1>Задача 3.</h1>
            <div>
                * Создайте функцию truncate(string, maxLength).
                * Функция проверяет длину строки string.
                * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
                * Результатом функции должна быть (при необходимости) усечённая строка.
                *
                * Условия:
                * - Функция принимает два параметра;
                * - Функция содержит валидацию входных параметров;
                * - Первый параметр должен обладать типом string;
                * - Второй параметр должен обладать типом number.
                */
            </div>
        </div>
    );
};
