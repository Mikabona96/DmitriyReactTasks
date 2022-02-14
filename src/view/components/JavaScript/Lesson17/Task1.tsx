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
        <h1>
            Task 1 result in console
        </h1>
    );
};

