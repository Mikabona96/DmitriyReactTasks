import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson4/Task1';
import { Task2 } from '../Lesson4/Task2';

export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/js/lesson4/1':
            return <Task1 />;
        case '/js/lesson4/2':
            return <Task2 />;
        default:
            return <div>Nothing....</div>;
    }
};
