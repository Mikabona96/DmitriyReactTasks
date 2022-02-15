import React, { FC } from 'react';

export const Task1: FC = () => {
    function sayHello() {
        console.log('Hello!');
    }
    // eslint-disable-next-line no-extend-native
    Function.prototype.delay = function(t: number) {
        // eslint-disable-next-line react/no-this-in-sfc
        if (this.length === 0) {
            setTimeout(() => {
                return this();
            }, t);
        }

        return (...rest: number[]) => {
            setTimeout(() => {
                return this(...rest);
            }, t);
        };
    };


    sayHello.delay(1000); /* Выведет "Hello!" через 1 секунду */


    function sum(a: number, b: number) {
        console.log(a + b);
    }

    sum.delay(1000)(5, 2); /* Выведет 7 через 1 секунду. */


    return (
        <div>
            <h1>Задача 1.</h1>
            <div>
                * Добавьте всем функциям в прототип метод delay(ms).
                *
                * При вызове этого метода, функция, на которой этот метод вызывают,
                * должна быть вызвана отложено, через указанное количество миллисекунд.
                *
                * Если функция, на которой вызывается метод delay(ms) нуждается в аргументах,
                * то их нужно пробросить в аргументы функции, которую возвращает метод delay(ms).
                *
                * func.delay(1000)('value 1', 'value 2').
                *
                * В примере выше аргументы 'value 1' и 'value 2' станут первым и вторым
                * аргументами для функции func.
                *
                * Условия:
                * - количество миллисекунд указывается в первом аргументе метода delay(ms);
                * - возвращаемая методом delay функция должна быть необязательной;
                * - в реализации метода delay(ms) обязательно использовать setTimeout.
                */
            </div>
        </div>
    );
};

