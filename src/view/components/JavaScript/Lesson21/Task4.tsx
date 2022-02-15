/* eslint-disable max-len */
import React, { FC } from 'react';


class Countries {
    url: string
    constructor(url: string) {
        this.url = url;
    }

    send(size: number) {
        if (typeof size !== 'number') {
            throw new Error('Send method must have a typeof number parameter');
        }

        return new Promise(async (resolve, reject) => {
            if (typeof this.url !== 'string') {
                throw new TypeError('Url must be a string');
            }
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            const res = await fetch(`${url}?_page=0&_limit=${size}`);
            if (res.status === 200) {
                resolve(res.json());
            }
            // eslint-disable-next-line prefer-promise-reject-errors
            reject(`We have error, status code: ${res.status}`);
        });
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts';
const countries = new Countries(url);


export const Task4: FC = () => {
    (async() => {
        try {
            const data = await countries.send(2);
            console.log(data); // массив стран
        } catch (error) {
            console.log(error);
        }
    })();

    return (
        <div>
            <h1>Задача 4.</h1>
            <div>
                Создайте класс `Countries` который при создании своего экземпляра принимает один параметр в с типом строка. Этот параметр будет служить API эндпоинтом.

                У класса `Countries` должен быть один метод `send` который должен возвращать промис.

                А принимает метод `send` один параметр который должен быть по типу `number` и который потом будет использоваться как значение для `GET` query-параметра `size`.

                **Обратите внимание**:

                1. Метод `send` должен возвращать промис.
                2. Использование `async & await` внутри класса **запрещено**.
                3. Использование посторонних библиотек кроме библиотеки `fetch` **запрещено**
                4. Если сервер ответил статус кодом `200` промис **должен** возвращать массив который содержит список объектов-стран.
                5. В том случае если сервер ответил статус кодом не `200` промис **должен** генерировать ошибку с текстом `We have error, status code: ${'statusCode'}`
                6. Генерировать ошибку если `url` по типу не строка.
                7. Генерировать ошибку если методу `send` передать по типу не число.

            </div>
        </div>
    );
};
