// Core
import React, { FC } from 'react';
import { useRoutes } from 'react-router-dom';


// Pages
import { LessonOneTwo } from '../components/RRComp/Lesson1-2';
import { LessonThree } from '../components/RRComp/Lesson3';
import { LessonFive } from '../components/RRComp/Lesson5';
import { LessonSix } from '../components/RRComp/Lesson6';
import { LessonSeven } from '../components/RRComp/Lesson7';
import ReactRedux from '../pages/ReactRedux';

import { Person } from '../../bus/people/components';
import { People } from '../../bus/people';
import { Films } from '../../bus/films';
import { Film } from '../../bus/films/components';


export const Public: FC = () => {
    const routes = useRoutes([
        {
            path:    '',
            element: <ReactRedux />,
        },
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
    ]);

    return routes;
};
