import React, { FC } from 'react';

type This = {
    clean: Function,
    stop: Function
}

function CleanerRobot(
    this: This,
    initialEnergy = 0 /* Изначальный заряд батареи робота */,
    cleaningSquare: number /* Площадь для уборки в метрах. */,
) {
    let energy: string | number = initialEnergy;
    let timerId: any = 0;
    const ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
    const CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
    const getCleaningTime = () => cleaningSquare / CLEANING_SPEED;
    const onReady = () => console.log(`Уборка завершена. Осталось заряда батареи: ${energy}.`);

    this.clean = () => {
        const cleaningTime = getCleaningTime();
        energy = `${energy as number - (ENERGY_CONSUMPTION * cleaningTime)}%`;
        console.log(
            `Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`,
        );

        /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */
        timerId = setTimeout(onReady, cleaningTime * 1000);
    };

    this.stop = () => {
        clearTimeout(timerId);
        console.log(`Уборка завершена досрочно. Осталось заряда батареи: ${energy}.`);
    };

// Решение
}

// const cleanerRobot = new CleanerRobot(50, 45);


export const Task1: FC = () => {
    // cleanerRobot.clean(); /* Начинаю процесс уборки. Время уборки: 4.5 часов. */

    return (
        <h1>
            Task 1 result in console need to fix
        </h1>
    );
};

