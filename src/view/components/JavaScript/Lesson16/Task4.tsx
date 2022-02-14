import React, { FC } from 'react';

class Stringer {
    reverse(str: string) {
        return str.split('').reverse()
            .join('');
    }

    uppercaseFirst(str: string) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    }

    uppercaseAll(str: string) {
        return str.toUpperCase();
    }
}
const stringer = new Stringer();

export const Task4: FC = () => {
    console.log(stringer.reverse('good morning!')); // !gninrom doog
    console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
    console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

    return (
        <h1>
            Task 4 result in console
        </h1>
    );
};
