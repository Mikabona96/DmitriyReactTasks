import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson3/Task1';
import { Task2 } from '../Lesson3/Task2';
import { Task4 } from '../Lesson3/Task4';
import { Task5 } from '../Lesson3/Task5';
import { Task6 } from '../Lesson3/Task6';
import { Task7 } from '../Lesson3/Task7';
import { Task8 } from '../Lesson3/Task8';


export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/js/lesson3/1':
            return <Task1 />;
        case '/js/lesson3/2':
            return <Task2 />;
        case '/js/lesson3/4':
            return <Task4 />;
        case '/js/lesson3/5':
            return <Task5 />;
        case '/js/lesson3/6':
            return <Task6 />;
        case '/js/lesson3/7':
            return <Task7 />;
        case '/js/lesson3/8':
            return <Task8 />;
        default:
            return <div>Nothing....</div>;
    }
};
