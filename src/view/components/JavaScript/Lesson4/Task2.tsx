import React, { FC } from 'react';

export const Task2: FC = () => {
    const person = {};

    // Решение

    Object.defineProperties(person, {
        rate: {
            value:        2,
            writable:     true,
            configurable: false,
            enumerable:   false,
        },

        salary: {
            get() {
                const currentDay = new Date().getDate();

                // eslint-disable-next-line react/no-this-in-sfc
                return this.rate * currentDay;
            },
        },

    });


    // person.rate = 30;

    // // Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
    // person.salary;

    console.log(person);

    return (
        <h1>
            Task 2 result in console
        </h1>
    );
};
