import React, { FC } from 'react';

export const Task2: FC = () => {
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

    // const cleanerRobot = new CleanerRobot(22);

    // /* Текущий заряд батареи: 22 */
    // console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

    // cleanerRobot.setEnergy(55);

    // /* Текущий заряд батареи: 55 */
    // console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

    // try {
    //     new CleanerRobot(-1);
    // } catch (error) {
    //     /* Error: New energy level can not be less than 0. */
    //     console.log(`${error.name}: ${error.message}`);
    // }

    // try {
    //     cleanerRobot.setEnergy(-22);
    // } catch (error) {
    //     /* Error: New energy level can not be less than 0. */
    //     console.log(`${error.name}: ${error.message}`);
    // }

    // try {
    //     cleanerRobot.setEnergy(101);
    // } catch (error) {
    //     /* Error: New energy level can not be more than 100. */
    //     console.log(`${error.name}: ${error.message}`);
    // }

    return (
        <h1>
            Task 2 result in console need to fix
        </h1>
    );
};

