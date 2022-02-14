import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson11/Task1';
import { Task2 } from '../Lesson11/Task2';
import { Task3 } from '../Lesson11/Task3';
import { Task4 } from '../Lesson11/Task4';

export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/js/lesson11/1':
            return <Task1 />;
        case '/js/lesson11/2':
            return <Task2 />;
        case '/js/lesson11/3':
            return <Task3 />;
        case '/js/lesson11/4':
            return <Task4 />;
        default:
            return <div>Nothing....</div>;
    }
};
