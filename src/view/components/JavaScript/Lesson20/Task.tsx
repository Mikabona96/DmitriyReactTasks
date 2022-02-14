import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson20/Task1';
import { Task2 } from '../Lesson20/Task2';

export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/js/lesson20/1':
            return <Task1 />;
        case '/js/lesson20/2':
            return <Task2 />;
        default:
            return <div>Nothing....</div>;
    }
};
