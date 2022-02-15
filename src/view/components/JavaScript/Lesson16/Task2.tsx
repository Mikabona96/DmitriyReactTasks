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
        <div>
            <h1>Задача 2.</h1>
            <div>
                * Улучшите класс Worker из предыдущей задачи.
                * Сделайте все свойства приватными, а для чтения каждого из них создайте соответствующие методы:
                *
                * - getName — возвращает конкатенацию приватных свойств firstName и lastName;
                * - getRate — возвращает значение приватного свойства rate
                * - getDays — возвращает значение приватного свойства days
                * - getSalary — возвращает зарплату
                *
                * Условия:
                * - Реализация решения — это синтаксис современных классов JavaScript;
                * - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
                */
            </div>
        </div>
    );
};
