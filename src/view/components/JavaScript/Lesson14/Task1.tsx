import React, { FC } from 'react';

class CleanerRobot {
    initialEnergy: number
    cleaningSquare: number
    energy: number
    resultEnergy: string
    constructor(initialEnergy: number, cleaningSquare: number) {
        this.initialEnergy = initialEnergy;
        this.cleaningSquare = cleaningSquare;
        this.energy = initialEnergy;
        this.resultEnergy = '';
    }

    timerId: void | ReturnType<typeof setTimeout> = void 0;
    ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
    CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
    getCleaningTime = () => this.cleaningSquare / this.CLEANING_SPEED;
    onReady = () => console.log(`Уборка завершена. Осталось заряда батареи: ${this.resultEnergy}.`);

    clean() {
        const cleaningTime = this.getCleaningTime();
        this.resultEnergy = `${this.energy - (this.ENERGY_CONSUMPTION * cleaningTime)}%`;
        console.log(
            `Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`,
        );

        /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */
        this.timerId = setTimeout(this.onReady, cleaningTime * 1000);
    }

    stop() {
        if (typeof this.timerId === 'number') {
            clearTimeout(this.timerId);
        }
        console.log(`Уборка завершена досрочно. Осталось заряда батареи: ${this.resultEnergy}.`);
    }
}

const cleanerRb = new CleanerRobot(50, 45);


export const Task1: FC = () => {
    cleanerRb.clean(); /* Начинаю процесс уборки. Время уборки: 4.5 часов. */

    return (
        <div>
            <h1>Задача 1.</h1>
            <div>
                * Дан базовый класс робота-уборщика.
                *
                * Добавьте роботу функционал употребления энергии:
                * - при начале уборки уровень энергии должен уменьшиться;
                * - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION.
                *
                * Затем добавьте роботу публичный метод stop() для остановки процесса уборки.
                * В если уборка остановлена раньше времени завершения,
                * onReady сработать не должен, а также нужно вывести другое сообщение.
                *
                * Условия:
                * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
                * - использовать функцию clearTimeout;
                * - идентификатор таймера нужно хранить в приватной переменной конструктора.
                */
            </div>
        </div>
    );
};

