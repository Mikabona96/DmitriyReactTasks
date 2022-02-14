import React, { FC } from 'react';

export const Task2: FC = () => {
    const checkSpam = (source: string, spam: string) => {
        if (typeof source !== 'string' || typeof spam !== 'string') {
            return;
        }

        return source.toLocaleLowerCase().includes(spam.toLocaleLowerCase());
    };

    console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
    console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true

    return (
        <h1>
            Task 2 result in console
        </h1>
    );
};
