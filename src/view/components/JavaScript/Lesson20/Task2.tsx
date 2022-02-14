import React, { FC } from 'react';
type Obj = {
    name: string
    verified?: boolean
}
class Customers {
    customers: Obj[]
    constructor() {
        this.customers = [];
    }

    add(object: Obj) {
        this.customers.push(object);
    }

    *[ Symbol.iterator ]() {
        const verifiedCutomers = this.customers.filter((customer) => customer.verified);
        for (const item of verifiedCutomers) {
            yield item;
        }
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

export const Task2: FC = () => {
    // // // В консоли будет
    // // { name: 'Andrii', verified: true }
    // // { name: 'Marco', verified: true }
    // // { name: 'Lisa', verified: true }
    // // { name: 'Ivan', verified: true }


    return (
        <h1>
            Task 2 result in console need to fix
        </h1>
    );
};

