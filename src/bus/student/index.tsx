/* eslint-disable max-len */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Profile } from './components/Profile';
import { StudentRegistration } from './components/StudentRegistration';
type State = {
    togglers: {
        isOnline: boolean,
        isLoggedIn: boolean
    },
    studentReducer: {
        student: {
            firstName: string;
            surname: string;
            age: string;
            email: string;
            sex: string;
            speciality: string;
        }
    }
}

export const Student: FC = () => {
    const profile = useSelector((state: State) => state.studentReducer.student);

    return (
        <section>
            {
                profile ?  <Profile profile = { profile }/> : <StudentRegistration />
            }
        </section>
    );
};
