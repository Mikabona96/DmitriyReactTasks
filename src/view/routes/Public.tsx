// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';


// Pages
import { Main, Register, Items, Item } from '../pages';
import Js from '../pages/Js';
import { LessonOneTwo } from '../components/RRComp/Lesson1-2';
import { LessonThree } from '../components/RRComp/Lesson3';
import { LessonFive } from '../components/RRComp/Lesson5';
import { LessonSix } from '../components/RRComp/Lesson6';
import { LessonSeven } from '../components/RRComp/Lesson7';
import ReactRedux from '../pages/ReactRedux';

import { Lesson2 } from '../components/JavaScript/Lesson2';
import { Lesson3 } from '../components/JavaScript/Lesson3';
import { Lesson4 } from '../components/JavaScript/Lesson4';
import { Lesson5 } from '../components/JavaScript/Lesson5';
import { Lesson6 } from '../components/JavaScript/Lesson6';
import { Lesson7 } from '../components/JavaScript/Lesson7';
import { Lesson9 } from '../components/JavaScript/Lesson9';
import { Lesson10 } from '../components/JavaScript/Lesson10';
import { Lesson11 } from '../components/JavaScript/Lesson11';
import { Lesson14 } from '../components/JavaScript/Lesson14';
import { Lesson15 } from '../components/JavaScript/Lesson15';
import { Lesson16 } from '../components/JavaScript/Lesson16';
import { Lesson17 } from '../components/JavaScript/Lesson17';
import { Lesson18 } from '../components/JavaScript/Lesson18';
import { Lesson20 } from '../components/JavaScript/Lesson20';
import { Lesson21 } from '../components/JavaScript/Lesson21';

import { GridKeyboard } from '../components/JavaScript/GridKeyboard/GridKeyboard';
import { Task as Task2 } from '../components/JavaScript/Lesson2/Task';
import { Task as Task3 } from '../components/JavaScript/Lesson3/Task';
import { Task as Task4 } from '../components/JavaScript/Lesson4/Task';
import { Task as Task5 } from '../components/JavaScript/Lesson5/Task';
import { Task as Task6 } from '../components/JavaScript/Lesson6/Task';
import { Task as Task7 } from '../components/JavaScript/Lesson7/Task';
import { Task as Task9 } from '../components/JavaScript/Lesson9/Task';
import { Task as Task10 } from '../components/JavaScript/Lesson10/Task';
import { Task as Task11 } from '../components/JavaScript/Lesson11/Task';
import { Task as Task14 } from '../components/JavaScript/Lesson14/Task';
import { Task as Task15 } from '../components/JavaScript/Lesson15/Task';
import { Task as Task16 } from '../components/JavaScript/Lesson16/Task';
import { Task as Task17 } from '../components/JavaScript/Lesson17/Task';
import { Task as Task18 } from '../components/JavaScript/Lesson18/Task';
import { Task as Task20 } from '../components/JavaScript/Lesson20/Task';
import { Task as Task21 } from '../components/JavaScript/Lesson21/Task';
import { Person } from '../../bus/people/components';
import { People } from '../../bus/people';
import { Films } from '../../bus/films';
import { Film } from '../../bus/films/components';


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
                {
                    path:     '/js',
                    element:  <Js />,
                    children: [
                        {
                            path:    'grid-keyboard',
                            element: <GridKeyboard />,
                        },
                        {
                            path:     'lesson2',
                            element:  <Lesson2 />,
                            children: [{ path: ':id', element: <Task2 /> }],
                        },
                        {
                            path:     'lesson3',
                            element:  <Lesson3 />,
                            children: [{ path: ':id', element: <Task3 /> }],
                        },
                        {
                            path:     'lesson4',
                            element:  <Lesson4 />,
                            children: [{ path: ':id', element: <Task4 /> }],
                        },
                        {
                            path:     'lesson5',
                            element:  <Lesson5 />,
                            children: [{ path: ':id', element: <Task5 /> }],
                        },
                        {
                            path:     'lesson6',
                            element:  <Lesson6 />,
                            children: [{ path: ':id', element: <Task6 /> }],
                        },
                        {
                            path:     'lesson7',
                            element:  <Lesson7 />,
                            children: [{ path: ':id', element: <Task7 /> }],
                        },
                        {
                            path:     'lesson9',
                            element:  <Lesson9 />,
                            children: [{ path: ':id', element: <Task9 /> }],
                        },
                        {
                            path:     'lesson10',
                            element:  <Lesson10 />,
                            children: [{ path: ':id', element: <Task10 /> }],
                        },
                        {
                            path:     'lesson11',
                            element:  <Lesson11 />,
                            children: [{ path: ':id', element: <Task11 /> }],
                        },
                        {
                            path:     'lesson14',
                            element:  <Lesson14 />,
                            children: [{ path: ':id', element: <Task14 /> }],
                        },
                        {
                            path:     'lesson15',
                            element:  <Lesson15 />,
                            children: [{ path: ':id', element: <Task15 /> }],
                        },
                        {
                            path:     'lesson16',
                            element:  <Lesson16 />,
                            children: [{ path: ':id', element: <Task16 /> }],
                        },
                        {
                            path:     'lesson17',
                            element:  <Lesson17 />,
                            children: [{ path: ':id', element: <Task17 /> }],
                        },
                        {
                            path:     'lesson18',
                            element:  <Lesson18 />,
                            children: [{ path: ':id', element: <Task18 /> }],
                        },
                        {
                            path:     'lesson20',
                            element:  <Lesson20 />,
                            children: [{ path: ':id', element: <Task20 /> }],
                        },
                        {
                            path:     'lesson21',
                            element:  <Lesson21 />,
                            children: [{ path: ':id', element: <Task21 /> }],
                        },
                    ],
                },
                {
                    path:     '/react-redux',
                    element:  <ReactRedux />,
                    children: [
                        {
                            path:    'lesson1-2',
                            element: <LessonOneTwo />,
                        },
                        {
                            path:    'lesson3',
                            element: <LessonThree />,
                        },
                        {
                            path:    'lesson5',
                            element: <LessonFive />,
                        },
                        {
                            path:    'lesson6',
                            element: <LessonSix />,
                        },
                        {
                            path:     'lesson7',
                            element:  <LessonSeven />,
                            children: [
                                {
                                    path:     'people', element:  <People />,
                                    children: [{ path: ':id', element: <Person /> }],
                                },
                                {
                                    path:     'films', element:  <Films />,
                                    children: [{ path: ':id', element: <Film /> }],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ]);

    return routes;
};
