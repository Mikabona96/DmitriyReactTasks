import React, { FC } from 'react';

class CleanerRobot {
    initialEnergy: number
    energy: number
    constructor(initialEnergy: number = 0) {
        this.initialEnergy = initialEnergy;
        this.energy = initialEnergy;
    }

    MAX_ENERGY_CAPACITY = 100;
    setEnergy(nrg: number) {
        this.energy = nrg;
        if (nrg > this.MAX_ENERGY_CAPACITY) {
            throw new Error('New energy level can not be more than 100.');
        }
        if (nrg < 0) {
            throw new Error('New energy level can not be less than 0.');
        }
    }

    getEnergy() {
        return this.energy;
    }
}

const cleanerRobot = new CleanerRobot(22);

export const Task2: FC = () => {
    /* Текущий заряд батареи: 22 */
    console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

    cleanerRobot.setEnergy(55);

    /* Текущий заряд батареи: 55 */
    console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

    try {
    // eslint-disable-next-line no-new
        new CleanerRobot(-1);
    } catch (error) {
        if (error instanceof Error) {
        /* Error: New energy level can not be less than 0. */
            console.log(`${error.name}: ${error.message}`);
        }
    }

    try {
        cleanerRobot.setEnergy(-22);
    } catch (error) {
        if (error instanceof Error) {
        /* Error: New energy level can not be less than 0. */
            console.log(`${error.name}: ${error.message}`);
        }
    }

    try {
        cleanerRobot.setEnergy(101);
    } catch (error) {
        if (error instanceof Error) {
        /* Error: New energy level can not be less than 0. */
            console.log(`${error.name}: ${error.message}`);
        }
    }

    // function CleanerRobot(initialEnergy = 0 /* Изначальный заряд батареи */) {
    //     this.getEnergy = getEnergy;
    //     this.setEnergy = setEnergy;

    //     const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
    //     let energy = null;

    //     this.setEnergy(initialEnergy);
    //     function getEnergy() {
    //         // Решение
    //         return energy;
    //     }
    //     function setEnergy() {
    //         // Решение

    //         let arg = arguments[ 0 ];

    //         energy = arg;
    //         if (arg > MAX_ENERGY_CAPACITY) {
    //             throw new Error('New energy level can not be more than 100.');
    //         }
    //         if (arg < 0) {
    //             throw new Error('New energy level can not be less than 0.');
    //         }
    //     }
    // }


    return (
        <h1>
            Task 2 result in console made on classes
        </h1>
    );
};

