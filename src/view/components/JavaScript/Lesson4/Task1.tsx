/* eslint-disable max-len */
import React, { FC } from 'react';

export const Task1: FC = () => {
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const monthDays = new Date(2022, currentMonth + 1, 0).getDate();

    const person = {
        get salary() {
            if (monthDays - currentDate > 20) {
                return 'good salary';
            }

            return 'bad salary';
        },
    };

    console.log(person.salary);

    return (
        <div>
            <h1>Задача 1.</h1>
            <div>
                Создайте объект `person` у которого будет одно свойство `salary`.
                * При чтении этого свойства должна возвращаться строка с текстом.
                * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
            </div>
        </div>
    );
};
