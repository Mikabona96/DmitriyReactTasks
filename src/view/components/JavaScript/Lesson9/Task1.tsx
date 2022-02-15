import React, { FC } from 'react';

export const Task1: FC = () => {
    type User = {
        firstName: string;
        lastName: string;
    }

    type UserData = {
        job: string;
        country: string;
        lastName: string;
    }

    type Result = {
        country?: string;
        firstName?: string;
        job?: string;
        lastName?: string;
    }

    function shallowMerge(param1: User, param2: UserData) {
        if (typeof param1 !== 'object' || typeof param2 !== 'object') {
            throw new TypeError('каждый из параметров должен быть обычным JavaScript объектом.');
        }

        return Object.defineProperties({}, {
            ...Object.getOwnPropertyDescriptors(param1),
            ...Object.getOwnPropertyDescriptors(param2),
        });
    }

    const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
    const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

    Object.defineProperty(user, 'firstName', { writable: false });
    Object.defineProperty(userData, 'job', { configurable: false });

    const result: Result = shallowMerge(user, userData);

    console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }

    console.log(Object.getOwnPropertyDescriptor(result, 'firstName')?.writable); // false
    console.log(Object.getOwnPropertyDescriptor(result, 'job')?.configurable); // false

    return (
        <div>
            <h1>Задача 1.</h1>
            <div>
                * Создайте функцию shallowMerge.
                * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
                * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
                * Свойства необходимо копировать лишь на один уровень каждого их объектов.
                *
                * Из объектов и обеих аргументах копируются только собственные свойства,
                включая недоступные для перечисления.
                *
                * Условия:
                * - Встроенный метод Object.create() использовать запрещено;
                * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
                * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из
                второго параметра.
                */
            </div>
        </div>
    );
};

