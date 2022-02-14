import React, { FC } from 'react';

class User {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return `${this.firstName + this.lastName}`;
    }
}

class Student extends User {
    year: number
    constructor(firstName: string, lastName: string, year: number) {
        super(firstName, lastName);
        this.year = year;
    }

    getCourse() {
        return new Date().getFullYear() - this.year;
    }
}

const student = new Student('Water', 'White', 2015);

export const Task5: FC = () => {
    console.log(student.getName()); // Walter White
    console.log(student.getCourse()); // 4

    return (
        <h1>
            Task 5 result in console
        </h1>
    );
};
