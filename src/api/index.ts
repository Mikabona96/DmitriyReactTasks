// Config
import { root } from './config';

export const api = Object.freeze({
    planets: {
        fetch: ()=> {
            return fetch(`${root}/planets`, {
                method: 'GET',
            });
        },
    },
    starships: {
        fetch: ()=>{
            return fetch(`${root}/starships`, {
                method: 'GET',
            });
        },
    },
    people: {
        fetch: ()=>{
            return fetch(`${root}/people`, {
                method: 'GET',
            });
        },
    },
});
