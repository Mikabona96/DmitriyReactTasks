import React, { FC } from 'react';

class Worker {
    firstName: string
    lastName: string
    rate: number
    days: number
    constructor(firstName: string, lastName: string, rate: number, days: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Walter', 'White', 10, 31);


export const Task1: FC = () => {
    console.log(worker.firstName); // Walter
    console.log(worker.lastName); // White
    console.log(worker.rate); // 10
    console.log(worker.days); // 31
    console.log(worker.getSalary()); // 10 * 31 = 310

    return (
        <h1>
            Task 1 result in console
        </h1>
    );
};
