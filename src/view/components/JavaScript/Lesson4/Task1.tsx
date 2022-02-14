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
        <h1>
            Task 1 result in console
        </h1>
    );
};
