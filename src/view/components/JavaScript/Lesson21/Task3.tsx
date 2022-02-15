/* eslint-disable max-len */
import React, { FC } from 'react';


const send = (url: string) => {
    return new Promise(async (resolve, reject) => {
        const res = await fetch(url);
        if (res.status === 200) {
            resolve(res.json());
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(`We have error, status code: ${res.status}`);
    });
};


const url = 'https://jsonplaceholder.typicode.com/todos/1';


export const Task3: FC = () => {
    send(url)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <div>
            <h1>
                Task 3 result in console
            </h1>
            <div>
                Создайте функцию `send` которая будет оберткой для функции `get` которая поддерживает только `callback` технологию.

                **Обратите внимание**:

                1. Функция `send` должна возвращать промис;
                2. Использование `async & await` **запрещено**.
                3. Нужно использовать библиотеку для отправки запросов [fetch](https://github.com/andris9/fetch)
                4. Использование посторонних библиотек кроме [библиотеки fetch](https://github.com/andris9/fetch) **запрещено**.
                5. Если сервер ответил статус кодом `200` промис **должен** резолвиться с параметром, аргументом для которого будет массив который содержит список объектов-стран.
                s 6. В том случае если сервер ответил статус кодом не `200` промис **должен** реджектится с текстом `We have error, status code: ${'statusCode'}`
            </div>
        </div>
    );
};

