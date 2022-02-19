import React from 'react';

import {Signup} from './components/signup';

import {useUser} from './hooks/useUser';

export const Profile = ()=>{
    const {user} = useUser();

    const profileJSX = user && (
        <>
            <p>Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Job: {user.jobType}</p>
        </>
    );

    return (
        <section>
            <h1>Profile</h1>
            {profileJSX}
            <Signup/>
        </section>
    )
}