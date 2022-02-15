import React, { FC } from 'react';

class Developer {
    completedTasks: string[] = [];
    completeTask(task: string) {
        // eslint-disable-next-line react/no-this-in-sfc
        this.completedTasks?.push(task);
    }
}

export const Task2: FC = () => {
    // function Developer() {
    //     // eslint-disable-next-line react/no-this-in-sfc
    //     this.completedTasks = [];
    // }

    // Developer.prototype.completeTask = function(task: string) {
    //     // eslint-disable-next-line react/no-this-in-sfc
    //     this.completedTasks.push(task);
    // };

    const developer1 = new Developer();
    const developer2 = new Developer();

    developer1.completeTask('finish a feature');
    developer1.completeTask('refactor code');
    developer2.completeTask('fix bug');

    console.log(developer1.completedTasks.length);
    console.log(developer2.completedTasks.length);


    return (
        <div>
            <h1>Задача 2.</h1>
            <div>
                * Дан класс Developer.
                *
                * У класса два свойства:
                * - completedTasks — массив с выполненными задачами;
                * - completeTask — метод для пополнения массива с выполненными задачами новой выполненной задачей.
                *
                * При создании двух экземпляров класса Developer,
                * если выполнил задачу – почему-то эта-же задача
                * считается выполненной и вторым вторым разработчиком.
                *
                * Исправьте этот пример так, чтобы при выполнении задачи одним разработчиком
                * массив completedTasks второго разработчика никак не менялся.
                * Нужно, чтобы у каждого разработчика был свой независимый массив completedTasks.
                *
                *  Условия:
                * - Решить задачу в стиле прототипного наследования JavaScript.
                */
            </div>
        </div>
    );
};

