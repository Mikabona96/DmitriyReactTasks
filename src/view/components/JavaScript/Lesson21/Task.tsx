import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson21/Task1';
import { Task2 } from '../Lesson21/Task2';
import { Task3 } from '../Lesson21/Task3';
import { Task4 } from '../Lesson21/Task4';

export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/js/lesson21/1':
            return <Task1 />;
        case '/js/lesson21/2':
            return <Task2 />;
        case '/js/lesson21/3':
            return <Task3 />;
        case '/js/lesson21/4':
            return <Task4 />;
        default:
            return <div>Nothing....</div>;
    }
};
