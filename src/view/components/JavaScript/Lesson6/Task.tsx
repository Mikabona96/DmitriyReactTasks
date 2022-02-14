import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson6/Task1';
import { Task2 } from '../Lesson6/Task2';
import { Task3 } from '../Lesson6/Task3';
import { Task4 } from '../Lesson6/Task4';
import { Task5 } from '../Lesson6/Task5';

export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/js/lesson6/1':
            return <Task1 />;
        case '/js/lesson6/2':
            return <Task2 />;
        case '/js/lesson6/3':
            return <Task3 />;
        case '/js/lesson6/4':
            return <Task4 />;
        case '/js/lesson6/5':
            return <Task5 />;
        default:
            return <div>Nothing....</div>;
    }
};
