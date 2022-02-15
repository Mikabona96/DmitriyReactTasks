/* eslint-disable max-len */
import React, { FC } from 'react';
type Obj = {
    name: string
    verified?: boolean
}

class Customers {
    customersArr: Obj[]
    constructor() {
        this.customersArr = [];
    }

    add(obj: Obj) {
        if (obj?.verified) {
            this.customersArr.push(obj);
        }
    }

    [ Symbol.iterator ]() {
        const limit = this.customersArr.length;
        const $this = this.customersArr;

        let counter = 0;

        return {
            next() {
                if (counter < limit) {
                    return {
                        // eslint-disable-next-line no-plusplus
                        value: $this[ counter++ ],
                        done:  false,
                    };
                }

                return {
                    done: true,
                };
            },
        };
    }
}

const customers = new Customers();


customers.add({ name: 'Alex' });
customers.add({ name: 'Victor' });
customers.add({ name: 'Marcus' });
customers.add({ name: 'Andrii', verified: true });
customers.add({ name: 'Marco', verified: true });
customers.add({ name: 'Oliver' });
customers.add({ name: 'Lisa', verified: true });
customers.add({ name: 'John' });
customers.add({ name: 'Ivan', verified: true });


export const Task1: FC = () => {
    for (const customer of customers) {
        console.log(customer);
    }

    // // В консоли будет
    // // { name: 'Andrii', verified: true }
    // // { name: 'Marco', verified: true }
    // // { name: 'Lisa', verified: true }
    // // { name: 'Ivan', verified: true }

    return (
        <div>
            <h1>
                Task 1 result in console
            </h1>


            Создайте класс `Customers` который умеет работать с механизмом `for of`.

            Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.

            Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

            **Обратите внимание**:

            1. Использование генераторов **запрещено**.
            2. Использование посторонних библиотек **запрещено**
            3. У класса `Customers` **должен** быть метод `Symbol.iterator`
        </div>
    );
};

