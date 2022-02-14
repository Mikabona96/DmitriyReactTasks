import React, { FC } from 'react';

// type Customer = {
//     id: string;
//     name: string;
//     verified?: boolean;
// }


// type Customers = {
//     arrCustomers: Array<Customer>
// }


// type Countries = {
//     id: string;
//     country: string;
// }[]

export const Task2: FC = () => {
//     const getCustomers = (arrCustomers: Customers, arrCountries: Countries) => {
//         return new Promise((resolve, reject) => {
//             let arr = [];
//             let wrongId = 0;
//             for (customer of arrCustomers) {
//                 wrongId = 0;
//                 for (let country of arrCountries) {
//                     if (customer.verified && country.id === customer.id) {
//                         arr.push({ ...customer, ...country });
//                     }
//                     if (customer.verified && country.id !== customer.id) {
//                         wrongId++;
//                     }
//                 }
//                 if (wrongId >= arrCountries.length) {
//                     // eslint-disable-next-line prefer-promise-reject-errors
//                     reject(`We don't have information about country for this customer: ${customer.name}`);
//                 }
//             }
//             resolve(arr);
//         });
//     };

    //     const customers = [
    //         {
    //             id:       'A1',
    //             name:     'Oliver',
    //             verified: true,
    //         },
    //         {
    //             id:       'A4',
    //             name:     'Max',
    //             verified: true,
    //         },
    //         {
    //             id:       'A6',
    //             name:     'Johnny',
    //             verified: true,
    //         },
    //         {
    //             id:   'A2',
    //             name: 'alex',
    //         },
    //     ];

    //     const countries = [
    //         {
    //             id:      'A1',
    //             country: 'usa',
    //         },
    //         {
    //             id:      'A4',
    //             country: 'uk',
    //         },
    //         {
    //             id:      'A7',
    //             country: 'uk',
    //         },
    //         {
    //             id:      'A2',
    //             country: 'poland',
    //         },
    //     ];

    //     getCustomers(customers, countries)
    //         .then((customers) => console.log(customers))
    //         .catch((error) => console.log(error));

    return (
        <h1>
            Task 2 result in console need to fix
        </h1>
    );
};
