/* eslint-disable max-len */
/* eslint-disable no-undefined */
import React, { FC } from 'react';

export const Task2: FC = () => {
    const person = {
        rate: 0,
        salary(): number {
            // eslint-disable-next-line react/no-this-in-sfc
            if (this.rate === undefined) {
                return 0;
            }

            // eslint-disable-next-line react/no-this-in-sfc
            return this.rate * new Date().getDate();
        },
    };
    Object.defineProperty(person, 'rate', {
        configurable: false,
        enumerable:   false,
        writable:     true,
    });
    person.rate = 30;
    console.log(person.salary());

    console.log(person);

    return (
        <div>
            <h1>Задача 2.</h1>
            <div>Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
                Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
                Свойство `salary` можно читать, но нельзя менять.
                При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
                Если rate не установлен — возвращаем число 0.
            </div>
        </div>
    );
};
