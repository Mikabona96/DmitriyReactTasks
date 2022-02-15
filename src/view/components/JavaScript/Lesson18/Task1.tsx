/* eslint-disable max-len */
import React, { FC } from 'react';
type Obj = {
    name: string,
    age: number,
    country: string,
    salary: number
}
class DB {
    id: string
    user: Map<string, {
        name: string,
        age: number,
        country: string,
        salary: number,
        id?: string,
        info?: {age: number}
    }> | null | any

    users: Map<string, {
        name: string,
        age: number,
        country: string,
        salary: number
    }>

    constructor() {
        this.id = 'jjj';
        this.user = null;
        this.users = new Map();
    }

    create(obj: Obj) {
        if (typeof obj !== 'object' && !Array.isArray(obj)) {
            throw new TypeError('An argument must be an object');
        }
        if (typeof obj.name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        if (typeof obj.age !== 'number') {
            throw new TypeError('Age must be a number');
        }
        if (typeof obj.country !== 'string') {
            throw new TypeError('Country must be a string');
        }
        if (typeof obj.salary !== 'number') {
            throw new TypeError('Salary must be a number');
        }
        this.id = String((Math.random() * 10000) + Math.round(Math.random() * 10000));
        const person = new Map();
        this.user = person.set(this.id, obj);

        return this.id;
    }

    read(id: string) {
        if (typeof id !== 'string') {
            throw new TypeError('An argument must be a string');
        }
        if (arguments.length === 0) {
            throw new Error('There is should be an argument');
        }
        if (id !== this.id) {
            return null;
        }

        // Current User
        const user = { ...this.user?.get(this.id), id: this.id };
        const person = new Map();
        this.user = person.set(this.id, user);

        // Map
        this.users.set(this.id, this.user.get(this.id));

        return this.user.get(this.id);
    }

    readAll() {
        if (arguments.length > 0) {
            throw new ReferenceError('There must not be any arguments');
        }

        return [ ...this.users.values() ];
    }

    update(id: string, ageObj: {age: number}) {
        if (arguments.length !== 2) {
            throw new Error('There are must be two arguments');
        }
        if (typeof id !== 'string') {
            throw new TypeError('Id argument must be a string');
        }
        if (typeof ageObj !== 'object') {
            throw new TypeError('Age argument must be an object');
        }

        const user = this.user?.get(this.id);
        if (user) {
            user.info = ageObj;
        }
        const person = new Map();
        this.user = person.set(this.id, user);

        //Map
        this.users.set(this.id, this.user.get(this.id));

        return this.users;
    }

    delete(id: string) {
        if (typeof id !== 'string') {
            throw new TypeError('An argument must be a string');
        }
        if (id !== this.id) {
            throw new Error('This Id doesn\'t exist');
        }
        this.user.delete(id);

        return this.user;
    }
}

const db = new DB();

const person = {
    name:    'Pitter', // обязательное поле с типом string
    age:     21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary:  500, // обязательное поле с типом number
};
const person2 = {
    name:    'Sam', // обязательное поле с типом string
    age:     22, // обязательное поле с типом number
    country: 'us', // обязательное поле с типом string
    salary:  1000, // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
const upd = db.update(id, { age: 22 }); // id
const del = db.delete(id); // true

const id2 = db.create(person2);
const customer2 = db.read(id2);
const customers2 = db.readAll(); // массив пользователей
const upd2 = db.update(id2, { age: 25 }); // id
const del2 = db.delete(id2); // true


export const Task1: FC = () => {
    console.log(id);
    console.log(customer);
    console.log(customers);
    console.log(upd);
    console.log(del);

    console.log(id2);
    console.log(customer2);
    console.log(customers2);
    console.log(upd2);
    console.log(del2);

    return (
        <div>
            <h1>Задача 1.</h1>
            <div>
                Создать класс `DB` который будет имплементировать `CRUD` модель.

                -   В качестве структуры данных использовать `Map`.
                -   Метод `create`:
                -   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
                -   -   возвращает `id`
                -   -   при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
                -   Метод `read`:
                -   -   принимает идентификатор пользователь
                -   -   если такого пользователя нет возвращать `null`
                -   -   если есть — возвращать объект пользователя с полем `id` внутри объекта.
                -   -   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
                -   Метод `readAll`:
                -   -   возвращает массив пользователей
                -   -   генерировать ошибку если в метод `readAll` передан параметр
                -   Метод `update`:
                -   -   обновляет пользователя
                -   -   принимает 2 обязательных параметра
                -   -   генерирует ошибку если передан несуществующий `id`
                -   -   генерирует ошибку если передан `id` с типом не строка
                -   -   генерирует ошибку если второй параметр не валидный
                -   Метод `delete`:
                -   -   удаляет пользователя
                -   -   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
            </div>
        </div>
    );
};

