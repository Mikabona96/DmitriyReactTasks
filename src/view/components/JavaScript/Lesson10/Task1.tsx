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
        <h1>
            Task 1 result in console
        </h1>
    );
};
