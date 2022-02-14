import React, { FC } from 'react';

class Worker {
    #firstName: string
    #lastName: string
    #rate: number
    #days: number

    constructor(firstName: string, lastName: string, rate: number, days: number) {
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
}

const worker = new Worker('Walter', 'White', 10, 31);

export const Task2: FC = () => {
    console.log(worker.getName()); // Walter White
    console.log(worker.getRate()); // 10
    console.log(worker.getDays()); // 31
    console.log(worker.getSalary()); // 10 * 31 = 310

    return (
        <h1>
            Task 2 result in console need to fix
        </h1>
    );
};
