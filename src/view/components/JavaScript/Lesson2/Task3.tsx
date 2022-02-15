import React, { FC } from 'react';

export const Task3: FC = () => {
    let value = 'c';

    console.log('Task 3');
    if (value === 'a') {
        console.log('a');
    } else if (
        value === 'b'
    || value === 'c'
    || value === 'd'
    || value === 'e'
    ) {
        console.log('others');
    } else {
        console.log('unknown');
    }


    return (
        <div>
            <h1>
                Task 3 result in console
            </h1>
            <div>
                Перепишите код, заменив оператор `switch` на оператор `if..else`
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
