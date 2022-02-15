import React, { FC } from 'react';

export const Task2: FC = () => {
    const checkSpam = (source: string, spam: string) => {
        if (typeof source !== 'string' || typeof spam !== 'string') {
            return;
        }

        return source.toLocaleLowerCase().includes(spam.toLocaleLowerCase());
    };

    console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
    console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true

    return (
        <div>
            <h1>Задача 2.</h1>
            <div>
                Напишите функцию checkSpam(source, example)
                Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.

                Условия:
                - Функция принимает два параметра;
                - Функция содержит валидацию входных параметров на тип string.
                - Функция должна быть нечувствительна к регистру:
            </div>
        </div>
    );
};
