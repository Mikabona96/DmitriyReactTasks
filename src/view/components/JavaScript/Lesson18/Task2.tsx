import React, { FC } from 'react';

export const Task2: FC = () => {
    // class DB {
    //     constructor() {
    //         this.id = null;
    //         this.user = null;
    //         this.users = new Map();
    //     }

    //     create(obj) {
    //         if (typeof obj !== 'object') {
    //             throw new TypeError('An argument must be an object');
    //         }
    //         if (typeof obj.name !== 'string') {
    //             throw new TypeError('Name must be a string');
    //         }
    //         if (typeof obj.age !== 'number') {
    //             throw new TypeError('Age must be a number');
    //         }
    //         if (typeof obj.country !== 'string') {
    //             throw new TypeError('Country must be a string');
    //         }
    //         if (typeof obj.salary !== 'number') {
    //             throw new TypeError('Salary must be a number');
    //         }
    //         this.id = String(Math.random() * 10000 + Math.round(Math.random() * 10000));
    //         const person = new Map();
    //         this.user = person.set(this.id, obj);

    //         return this.id;
    //     }

    //     read(id) {
    //         if (typeof id !== 'string') {
    //             throw new TypeError('An argument must be a string');
    //         }
    //         if (arguments.length === 0) {
    //             throw new Error('There is should be an argument');
    //         }
    //         if (id !== this.id) {
    //             return null;
    //         }

    //         // Current User
    //         const user = this.user.get(this.id);
    //         user.id = this.id;
    //         const person = new Map();
    //         this.user = person.set(this.id, user);

    //         // Map
    //         this.users.set(this.id, this.user.get(this.id));

    //         return this.user.get(this.id);
    //     }

    //     readAll() {
    //         if (arguments.length > 0) {
    //             throw new ReferenceError('There must not be any arguments');
    //         }

    //         return [ ...this.users.values() ];
    //     }

    //     update(id, ageObj) {
    //         if (arguments.length !== 2) {
    //             throw new Error('There are must be two arguments');
    //         }
    //         if (typeof id !== 'string') {
    //             throw new TypeError('Id argument must be a string');
    //         }
    //         if (typeof ageObj !== 'object') {
    //             throw new TypeError('Age argument must be an object');
    //         }

    //         const user = this.user.get(this.id);
    //         user.info = ageObj;
    //         const person = new Map();
    //         this.user = person.set(this.id, user);

    //         //Map
    //         this.users.set(this.id, this.user.get(this.id));

    //         return this.users;
    //     }

    //     delete(id) {
    //         if (typeof id !== 'string') {
    //             throw new TypeError('An argument must be a string');
    //         }
    //         if (id !== this.id) {
    //             throw new Error('This Id doesn\'t exist');
    //         }
    //         this.user.delete(id);

    //         return this.user;
    //     }

    //     find(query) {
    //         debugger;
    //         const users = [ ...this.users.values() ].filter((user) => {
    //             if (query.country === user.country && query.age.min <= user.age && query.salary) {
    //                 if (query.salary.min && query.salary.max && query.salary.min <= user.salary && query.salary.max >= user.salary) {
    //                     return user;
    //                 }
    //                 if (query.salary.min && query.salary.min <= user.salary) {
    //                     return user;
    //                 }

    //                 if (query.salary.max && query.salary.max >= user.salary) {
    //                     return user;
    //                 }
    //             }
    //         });

    //         return users;
    //     }
    // }

    // const db = new DB();

    // const person = {
    //     name:    'Pitter', // обязательное поле с типом string
    //     age:     21, // обязательное поле с типом number
    //     country: 'ua', // обязательное поле с типом string
    //     salary:  500, // обязательное поле с типом number
    // };
    // const person2 = {
    //     name:    'Sam', // обязательное поле с типом string
    //     age:     22, // обязательное поле с типом number
    //     country: 'us', // обязательное поле с типом string
    //     salary:  1000, // обязательное поле с типом number
    // };

    // const id = db.create(person);
    // const customer = db.read(id);
    // const customers = db.readAll(); // массив пользователей
    // const upd = db.update(id, { age: 22 }); // id
    // const del = db.delete(id); // true

    // const id2 = db.create(person2);
    // const customer2 = db.read(id2);
    // const customers2 = db.readAll(); // массив пользователей
    // const upd2 = db.update(id2, { age: 25 }); // id
    // const del2 = db.delete(id2); // true


    // const query = {
    //     country: 'ua',
    //     age:     {
    //         min: 21,
    //     },
    //     salary: {
    //         min: 300,
    //         max: 600,
    //     },
    // };

    // const customersArr = db.find(query); // массив пользователей
    // console.log(customersArr);

    return (
        <h1>
            Task 2 result in console need to fix
        </h1>
    );
};

