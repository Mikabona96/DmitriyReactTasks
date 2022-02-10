import React, { FC } from 'react';

export const Task10: FC = () => {
    const arr = [ 6, 5, 4, 3, 2, 1 ];
    // [1,2,3,4,5,6]


    for (let i =  0; i < arr.length; i++) {
        for (let k =  0; k < arr.length; k++) {
            if (arr[ k + 1 ] < arr[ k ]) {
                let tmp = arr[ k ];
                arr[ k ] = arr[ k + 1 ];
                arr[ k + 1 ] = tmp;
            }
        }
    }

    console.log(arr);


    return (
        <h1>
            Task 10 result in console
        </h1>
    );
};
