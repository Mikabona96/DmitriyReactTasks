import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson2/Task1';
import { Task2 } from '../Lesson2/Task2';
import { Task4 } from '../Lesson2/Task4';
import { Task5 } from '../Lesson2/Task5';
import { Task6 } from '../Lesson2/Task6';
import { Task7 } from '../Lesson2/Task7';
import { Task8 } from '../Lesson2/Task8';
import { Task9 } from '../Lesson2/Task9';
import { Task10 } from '../Lesson2/Task10';
import { Task11 } from '../Lesson2/Task11';
import { Task12 } from '../Lesson2/Task12';
import { Task13 } from '../Lesson2/Task13';
import { Task14 } from '../Lesson2/Task14';

export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/js/lesson2/1':
            return <Task1 />;
        case '/js/lesson2/2':
            return <Task2 />;
        case '/js/lesson2/4':
            return <Task4 />;
        case '/js/lesson2/5':
            return <Task5 />;
        case '/js/lesson2/6':
            return <Task6 />;
        case '/js/lesson2/7':
            return <Task7 />;
        case '/js/lesson2/8':
            return <Task8 />;
        case '/js/lesson2/9':
            return <Task9 />;
        case '/js/lesson2/10':
            return <Task10 />;
        case '/js/lesson2/11':
            return <Task11 />;
        case '/js/lesson2/12':
            return <Task12 />;
        case '/js/lesson2/13':
            return <Task13 />;
        case '/js/lesson2/14':
            return <Task14 />;
        default:
            return <div>Nothing....</div>;
    }
};
