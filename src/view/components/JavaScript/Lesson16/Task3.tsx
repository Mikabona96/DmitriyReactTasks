import React, { FC } from 'react';

class Worker {
    #firstName: string
    #lastName: string
    #rate: number
    #days: number
    constructor(firstName:string, lastName:string, rate:number, days:number) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#rate = rate;
        this.#days = days;
    }

    getName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    getRate() {
        return this.#rate;
    }

    getDays() {
        return this.#days;
    }

    getSalary() {
        return this.#rate * this.#days;
    }

    setDays(val: number) {
        this.#days = val;
    }

    setRate(val: number) {
        this.#rate = val;
    }
}

const worker = new Worker('Walter', 'White', 10, 31);

export const Task3: FC = () => {
    console.log(worker.getName()); // Walter White
    console.log(worker.getRate()); // 10
    console.log(worker.getDays()); // 31
    console.log(worker.getSalary()); // 10 * 31 = 310

    worker.setRate(20);
    worker.setDays(10);
    console.log(worker.getSalary()); // 20 * 10 = 200

    return (
        <h1>
            Task 3 result in console
        </h1>
    );
};
