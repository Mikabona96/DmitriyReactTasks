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
        <h1>
            Task 1 result in console
        </h1>
    );
};

