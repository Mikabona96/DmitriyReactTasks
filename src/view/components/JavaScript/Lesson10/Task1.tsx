/* eslint-disable max-len */
import React, { FC } from 'react';

export const Task1: FC = () => {
    function bind(func: Function, obj: {name: string}, ...rest: string[]) {
        if (typeof func !== 'function') {
            throw new Error('Первый параметр не является типом function');
        }
        if (typeof obj !== 'object') {
            throw new Error('Второй параметр не является типом object');
        }
        if (Array.isArray(obj)) {
            throw new Error('Второй параметр является массивом');
        }

        return () => func.apply(obj, [ ...rest ]);
    }

    type ForThis = {
        name: string;
        getName: (this: {
            name: string;
        }, greeting: string, message: string) => string;
    }

    function getName(this: {name: string} | ForThis, greeting: string, message: string) {
        // eslint-disable-next-line react/no-this-in-sfc
        const name: string = this.name;

        return `${greeting} ${message} ${name}.`;
    }

    const user = { name: 'Walter', getName };
    const oliver = { name: 'Oliver' };

    const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

    console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
    console.log(boundedGetName()); // Hello! I am Oliver.

    return (
        <div>
            <h1>Задача 1.</h1>
            <div>
                * Напишите имплементацию функции Function.prototype.bind().
                *
                * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
                * и возвращать новую, привязанную версию целевой функции.
                *
                * Функция bind() должна обладать следующими параметрами:
                * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
                * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
                * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
                *
                * Генерировать ошибки если:
                * - Первый параметр не является типом function;
                * - Второй параметр не является типом object;
                * - Второй параметр является массивом.
                *
                * Условия:
                * - Использовать встроенную функцию Function.prototype.bind() запрещено.
                */
            </div>
        </div>
    );
};
