import React, { FC } from 'react';

export const Task1: FC = () => {
    const postpone = (start: number, end: number, delay: number) => {
        if (typeof start !== 'number' || typeof end !== 'number' || typeof delay !== 'number') {
            throw new Error('All the parameters must be type of number');
        }
        let comparison = '<=';
        let operator = '++';
        let formula = '(1000 * ind)';

        if (start > end) {
            comparison = '>=';
            operator = '--';
            formula = '(start * 1000) - (i * 1000) + 1000';
        }

        // eslint-disable-next-line no-eval
        eval(`
            for (let i = ${start}; i ${comparison} ${end}; i${operator}) { 
                (function(ind) { 
                    setTimeout(function(){
                        console.log(ind);
                    }, ${delay} + ${formula}); 
                })(i); 
            }
        `);
    };

    postpone(1, 3, 1000);
    // 1
    // 2
    // 3
    postpone(3, 1, 1000);

    // 3
    // 2
    // 1
    return (
        <div>
            <h1>Задача 1.</h1>
            <div>
                *
                * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
                *
                * Функция принимает 3 параметра:
                * - Первый параметр `start` — число, c которого начнется отсчет;
                * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
                * - Третий параметр `delay` — это время в `мс` между выводами.
                *
                * Условия:
                * - Функция принимает три параметра;
                * - Функция содержит валидацию входных параметров на тип number;
                * - Обязательно использование таймера setTimeout и цикла for;
                * - Функция должна уметь считать в обе стороны.
                */
            </div>
        </div>
    );
};

