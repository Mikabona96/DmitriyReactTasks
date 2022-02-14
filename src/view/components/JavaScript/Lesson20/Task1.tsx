import React, { FC } from 'react';
type Obj = {
    name: string
    verified?: boolean
}

class Customers {
    customersArr: Obj[]
    constructor() {
        this.customersArr = [];
    }

    add(obj: Obj) {
        if (obj?.verified) {
            this.customersArr.push(obj);
        }
    }

    [ Symbol.iterator ]() {
        const limit = this.customersArr.length;
        const $this = this.customersArr;

        let counter = 0;

        return {
            next() {
                if (counter < limit) {
                    return {
                        // eslint-disable-next-line no-plusplus
                        value: $this[ counter++ ],
                        done:  false,
                    };
                }

                return {
                    done: true,
                };
            },
        };
    }
}

const customers = new Customers();


customers.add({ name: 'Alex' });
customers.add({ name: 'Victor' });
customers.add({ name: 'Marcus' });
customers.add({ name: 'Andrii', verified: true });
customers.add({ name: 'Marco', verified: true });
customers.add({ name: 'Oliver' });
customers.add({ name: 'Lisa', verified: true });
customers.add({ name: 'John' });
customers.add({ name: 'Ivan', verified: true });


for (const customer of customers) {
    console.log(customer);
}


export const Task1: FC = () => {
    // // В консоли будет
    // // { name: 'Andrii', verified: true }
    // // { name: 'Marco', verified: true }
    // // { name: 'Lisa', verified: true }
    // // { name: 'Ivan', verified: true }

    return (
        <h1>
            Task 1 result in console need to fix
        </h1>
    );
};

