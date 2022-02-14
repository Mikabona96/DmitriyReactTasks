import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson18/Task1';
import { Task2 } from '../Lesson18/Task2';

export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/js/lesson18/1':
            return <Task1 />;
        case '/js/lesson18/2':
            return <Task2 />;
        default:
            return <div>Nothing....</div>;
    }
};
