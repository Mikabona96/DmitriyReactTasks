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
        <div>
            <h3>Component: Task 10</h3>
            <div>
                Отсортируйте массив по возрастанию.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </div>
    );
};
