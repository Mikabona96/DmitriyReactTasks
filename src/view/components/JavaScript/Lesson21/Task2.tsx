/* eslint-disable max-len */
import React, { FC } from 'react';

type Customer = {
    id: string;
    name: string;
    verified?: boolean;
}


type Countries = {
    id: string;
    country: string;
}


export const Task2: FC = () => {
    const getCustomers = (arrCustomers: Customer[], arrCountries: Countries[]) => {
        return new Promise((resolve, reject) => {
            let arr = [];
            let wrongId = 0;
            for (let i = 0; i < arrCustomers.length; i++) {
                wrongId = 0;
                for (let j = 0; j < arrCountries.length; j++) {
                    if (arrCustomers[ i ].verified && arrCountries[ j ].id === arrCustomers[ i ].id) {
                        arr.push({ ...arrCustomers[ i ], ...arrCountries[ j ] });
                    }
                    if (arrCustomers[ i ].verified && arrCountries[ j ].id !== arrCustomers[ i ].id) {
                        // eslint-disable-next-line no-plusplus
                        wrongId++;
                    }
                }
                if (wrongId >= arrCountries.length) {
                    // eslint-disable-next-line prefer-promise-reject-errors
                    reject(`We don't have information about country for this customer: ${arrCustomers[ i ].name}`);
                }
            }
            resolve(arr);
        });
    };

    const customers: Customer[] = [
        {
            id:       'A1',
            name:     'Oliver',
            verified: true,
        },
        {
            id:       'A4',
            name:     'Max',
            verified: true,
        },
        {
            id:       'A6',
            name:     'Johnny',
            verified: true,
        },
        {
            id:   'A2',
            name: 'alex',
        },
    ];

    const countries = [
        {
            id:      'A1',
            country: 'usa',
        },
        {
            id:      'A4',
            country: 'uk',
        },
        {
            id:      'A7',
            country: 'uk',
        },
        {
            id:      'A2',
            country: 'poland',
        },
    ];

    getCustomers(customers, countries)
        .then((customers) => console.log(customers))
        .catch((error) => console.log(error));

    return (
        <h1>
            Task 2 result in console need to fix
            <br />
            # Задача 2
            <br />
            Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.
            <br />
            Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.
            <br />
            **Обратите внимание**:
            <br />
            1. Функция `getCustomers` должна возвращать промис;
            <br />
            2. Использование `async & await` **запрещено**;
            <br />
            3. Использование посторонних библиотек **запрещено**;
            <br />
            4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: $\customer.name`;
            <br />
            5. Склеивание происходит **только** для объектов с флагом `verified: true`.
        </h1>
    );
};
