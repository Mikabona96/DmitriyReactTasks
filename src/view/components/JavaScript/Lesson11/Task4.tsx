import React, { FC } from 'react';

export const Task4: FC = () => {
    type ArrCall = ({
        name: string;
        in: number[];
        out: number;
    } | {
        name: string;
        in: never[];
        out: undefined;
    })[]
    const createLogger = () => {
        const arrCall: ArrCall = [];

        return {
            call(func: Function, ...rest: number[]) {
                if (typeof func !== 'function') {
                    throw new Error('В качестве первого аргумента методу call была передана не функция.');
                }
                arrCall.push({
                    name: func.name,
                    in:   [ ...rest ],
                    out:  func(...rest),
                });

                return func(...rest);
            },
            print() {
                return arrCall;
            },
        };
    };

    const returnIdentity = (n: number) => n;
    const sum = (a: number, b: number) => a + b;
    // eslint-disable-next-line no-empty-function
    const returnNothing = () => {};

    const logger1 = createLogger();
    console.log(logger1.call(returnIdentity, 1)); // 1
    console.log(logger1.call(sum, 1, 2)); // 3
    console.log(logger1.print()); // [ { name: 'returnIdentity', in: [ 1 ], out: 1 }, { name: 'sum', in: [ 1, 2 ], out: 3 } ]

    const logger2 = createLogger();
    console.log(logger2.call(sum, 3, 4)); // 7
    console.log(logger2.call(returnIdentity, 9)); // 9
    console.log(logger2.call(returnNothing)); // undefined
    console.log(logger2.print()); // [ { name: 'sum', in: [ 3, 4 ], out: 7 }, { name: 'returnIdentity', in: [ 9 ], out: 9 }, { name: 'returnNothing', in: [], out: undefined } ]

    return (
        <h1>
            Task 4 result in console need to Fix
        </h1>
    );
};
