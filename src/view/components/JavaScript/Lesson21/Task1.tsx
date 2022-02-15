/* eslint-disable max-len */
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
        <div>
            Task 1 result in console
            <br />
            # Задача 1
            <br />
            Создайте функцию `isCustomerVerified` которая умеет проверять объект `customer` на валидность.
            <br />
            Валидным объект `customer` считается только в том случае когда у него установлен флаг `verified: true`.
            <br />
            Обратите внимание**:
            <br />
            1. Функция `isCustomerVerified` должна возвращать промис;
            <br />
            2. Использование `async & await` **запрещено**;
            <br />
            3. Использование посторонних библиотек **запрещено**;
            <br />
            4. В том случае если объект валидный промис резолвится с одним параметром, аргументом для которого будет `true`;
            <br />
            5. В том случае если объект невалидный промис реджектится с текстом `Customer is not verified`.

        </div>
    );
};
