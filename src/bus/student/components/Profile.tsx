/* eslint-disable max-len */
import React, { FC } from 'react';

type PropTypes = {
    profile: {
        firstName: string;
        surname: string;
        age: string;
        email: string;
        sex: string;
        speciality: string;
    }
}

export const Profile: FC<PropTypes> = ({ profile }) => {
    return (
        <div>
            <p>{profile.firstName}</p>
            <p>{profile.surname}</p>
            <p>{profile.age}</p>
            <p>{profile.email}</p>
            <p>{profile.sex}</p>
            <p>{profile.speciality}</p>
        </div>
    );
};
