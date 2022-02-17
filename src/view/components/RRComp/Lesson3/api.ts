/* eslint-disable no-return-await */
const uri = 'https://jsonplaceholder.typicode.com';

export const api = {
    news: {
        fetch: async () => {
            return await fetch(`${uri}/users`);
        },
    },
};
