import React, { FC } from 'react';

export const Task9: FC = () => {
    const arr = [ 1, 2, 3, 4, 5, 6 ];
    // [6,5,4,3,2,1]

    // const sorted = arr.sort(function(a, b) {return b - a})


    for (let i =  0; i < arr.length; i++) {
        for (let k =  0; k < arr.length; k++) {
            if (arr[ k + 1 ] > arr[ k ]) {
                let tmp = arr[ k + 1 ];
                arr[ k + 1 ] = arr[ k ];
                arr[ k ] = tmp;
            }
        }
    }

    console.log(arr);


    return (
        <h1>
            Task 9 result in console
        </h1>
    );
};
