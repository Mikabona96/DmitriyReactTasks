import React, { FC } from 'react';

export const Task4: FC = () => {
    const PRICE = '$120';

    // Решение
    const extractCurrencyValue = (source: string) => {
        if (typeof source !== 'string') {
            return;
        }

        return Number(source.slice(1));
    };
    console.log(extractCurrencyValue(PRICE)); // 120

    return (
        <h1>
            Task 4 result in console
        </h1>
    );
};
