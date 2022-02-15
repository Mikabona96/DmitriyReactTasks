import React, { FC } from 'react';

export const Task4: FC = () => {
    const value = 0;

    switch (value as number) {
        case 0:
            console.log(0);
            break;
        case 1:
            console.log(1);
            break;
        case 2 || 3:
            console.log('2,3');
            break;
        default:
            break;
    }

    return (
        <div>
            <h1>
                Task 4 result in console
            </h1>
            <div>
                Перепишите код с использованием одной конструкции `switch`
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
