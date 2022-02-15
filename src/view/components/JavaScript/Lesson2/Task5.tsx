import React, { FC } from 'react';

export const Task5: FC = () => {
    var i = 0;
    while (i < 3) {
        console.log('номер ' + i + '!');
        // eslint-disable-next-line no-plusplus
        i++;
    }


    return (
        <div>
            <h3>Component: Task 5</h3>
            <div>
                Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
