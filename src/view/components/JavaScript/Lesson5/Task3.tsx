import React, { FC } from 'react';

export const Task3: FC = () => {
    const truncate = (string: string, maxLength: number): string | void => {
        if (typeof string === 'string' && typeof maxLength === 'number') {
            if (string.length > maxLength) {
                return `${string.slice(0, maxLength - 3)}...`;
            }
        }
    };

    console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'

    return (
        <h1>
            Task 3 result in console
        </h1>
    );
};
