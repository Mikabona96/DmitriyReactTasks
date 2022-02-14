import React, { FC } from 'react';

export const Task3: FC = () => {
    // type Items = {
    //     index: number,
    //     name: string,
    //     message: string
    // }

    // type Arr = {
    //     array: Array<Items>
    // }

    // const calculateAdvanced = (...rest: Function[]) => {
    //     let acc = {
    //         value:  0,
    //         errors: [],
    //     };

    //     for (let i = 0; i < rest.length; i++) {
    //         try {
    //             if (typeof rest[ i ] !== 'function') {
    //                 throw new Error(`Аргумент под №${i} не является функцией`);
    //             }
    //             if (typeof rest[ i ]() === 'undefined') {
    //                 throw new Error(`Callback at index ${i} did not return any value.`);
    //             }
    //             if (typeof rest[ i ]() !== 'undefined') {
    //                 acc.value = rest[ i ](acc.value);
    //             }
    //         } catch (error) {
    //             if (error instanceof Error) {
    //                 const newObject: Items = { name: error.name, index: i, message: error.message };
    //                 acc.errors = [ ...acc.errors, newObject ];
    //             }
    //         }
    //     }

    //     return acc;
    // };


    // const result = calculateAdvanced(
    //     () => {},
    //     () => {
    //         return 7;
    //     },
    //     () => {},
    //     (prevResult: number) => {
    //         return prevResult + 4;
    //     },
    //     () => {
    //         throw new RangeError('Range is too big.');
    //     },
    //     (prevResult: number) => {
    //         return prevResult + 1;
    //     },
    //     () => {
    //         throw new ReferenceError('ID is not defined.');
    //     },
    //     (prevResult: number) => {
    //         return prevResult * 5;
    //     },
    // );

    // console.log(result);

    return (
        <h1>
            Task 3 result in console need to fix
        </h1>
    );
};

