import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson17/Task1';

export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/js/lesson17/1':
            return <Task1 />;
        default:
            return <div>Nothing....</div>;
    }
};
