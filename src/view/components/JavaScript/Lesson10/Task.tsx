import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson10/Task1';
import { Task2 } from '../Lesson10/Task2';
import { Task3 } from '../Lesson10/Task3';
import { Task4 } from '../Lesson10/Task4';

export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/js/lesson10/1':
            return <Task1 />;
        case '/js/lesson10/2':
            return <Task2 />;
        case '/js/lesson10/3':
            return <Task3 />;
        case '/js/lesson10/4':
            return <Task4 />;
        default:
            return <div>Nothing....</div>;
    }
};
