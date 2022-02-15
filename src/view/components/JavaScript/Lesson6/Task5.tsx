import React, { FC } from 'react';
const array = [ 1, 2, 3, 4, 5 ];
const INITIAL_ACCUMULATOR = 6;

// Решение
function reduce(arr: number[], fn: Function, num: number): number {
    if (arguments.length !== 3) {
        throw new Error('При вызове функции не было передано 3 аргумента');
    }


    if (typeof fn !== 'function') {
        throw new Error('В качестве второго аргумента была передана не функция');
    }

    if (typeof num !== 'number') {
        throw new Error('В качестве третьего аргумента было передан не число');
    }
    let res = num;

    for (let i = 0; i < arr.length; i++) {
        res += fn(num, arr[ i ], i, arr) - num;
    }

    return res;
}
const result = reduce(
    array,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function(accumulator: number, item: number, i: number, arrayRef: number[]) {
        // console.log(accumulator); // значение-аккумулятор
        // console.log(item); // элемент массива
        // console.log(i); // индекс элемента
        // console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);


export const Task5: FC = () => {
    console.log(result); // 21

    return (
        <h1>
            Task 5 result in console any type in acc line 8
        </h1>
    );
};
