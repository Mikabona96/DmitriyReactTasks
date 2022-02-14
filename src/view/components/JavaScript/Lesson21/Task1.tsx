import React, { FC } from 'react';
type Obj = {
    name: string,
    verified?: boolean
}
export const Task1: FC = () => {
    const isCustomerVerified = (obj: Obj) => {
        return new Promise((resolve, reject) => {
            if (obj.verified) {
                resolve(obj);
            } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject('Customer is not verified');
            }
        });
    };


    const personFirst = {
        name:     'Oliver',
        verified: true,
    };

    const personSecond = {
        name: 'Alex',
    };

    isCustomerVerified(personFirst)
        .then((status) => console.log(status)) // true
        .catch((error) => console.log(error));

    isCustomerVerified(personSecond)
        .then((status) => console.log(status))
        .catch((error) => console.log(error)); // Customer is not verified

    return (
        <h1>
            Task 1 result in console
        </h1>
    );
};
