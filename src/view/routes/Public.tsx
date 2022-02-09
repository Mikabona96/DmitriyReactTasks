// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { Task1 } from '../components/JavaScript/Task1';

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
            children: [{ path: '1', element: <Task1 /> }],
        },
    ]);

    return routes;
};
