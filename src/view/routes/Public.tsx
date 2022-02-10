// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { Lesson2 } from '../components/JavaScript/Lesson2';
import { Task1 } from '../components/JavaScript/Lesson2/Task1';
import { Task10 } from '../components/JavaScript/Lesson2/Task10';
import { Task11 } from '../components/JavaScript/Lesson2/Task11';
import { Task12 } from '../components/JavaScript/Lesson2/Task12';
import { Task13 } from '../components/JavaScript/Lesson2/Task13';
import { Task14 } from '../components/JavaScript/Lesson2/Task14';
import { Task2 } from '../components/JavaScript/Lesson2/Task2';
import { Task4 } from '../components/JavaScript/Lesson2/Task4';
import { Task5 } from '../components/JavaScript/Lesson2/Task5';
import { Task6 } from '../components/JavaScript/Lesson2/Task6';
import { Task7 } from '../components/JavaScript/Lesson2/Task7';
import { Task8 } from '../components/JavaScript/Lesson2/Task8';
import { Task9 } from '../components/JavaScript/Lesson2/Task9';

// Pages
import { Main, Register, Items, Item } from '../pages';
import Js from '../pages/Js';


export const Public: FC = () => {
    const routes = useRoutes([
        {
            path:     '',
            element:  <Main />,
            children: [
                { path: 'register', element: <Register /> },
                {
                    path:     'items',
                    element:  <Items />,
                    children: [{ path: ':id', element: <Item /> }],
                },
                { path: '*', element: <Navigate to = 'register' /> },
            ],
        },
        {
            path:     '/js',
            element:  <Js />,
            children: [
                {
                    path:     'lesson2',
                    element:  <Lesson2 />,
                    children: [
                        { path: '1', element: <Task1 /> },
                        { path: '2', element: <Task2 /> },
                        { path: '3', element: <div>Sorry 3rd task is missing</div> },
                        { path: '4', element: <Task4 /> },
                        { path: '5', element: <Task5 /> },
                        { path: '6', element: <Task6 /> },
                        { path: '7', element: <Task7 /> },
                        { path: '8', element: <Task8 /> },
                        { path: '9', element: <Task9 /> },
                        { path: '10', element: <Task10 /> },
                        { path: '11', element: <Task11 /> },
                        { path: '12', element: <Task12 /> },
                        { path: '13', element: <Task13 /> },
                        { path: '14', element: <Task14 /> },
                    ],
                },
            ],
        },
    ]);

    return routes;
};
