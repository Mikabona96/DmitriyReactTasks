// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const Lesson21: FC = () => {
    return (
        <div>
            <Link to = '/js/lesson21/1'>Task #1</Link>
            <Link to = '/js/lesson21/2'>Task #2</Link>
            <Link to = '/js/lesson21/3'>Task #3</Link>
            <Link to = '/js/lesson21/4'>Task #4</Link>
            <Outlet />
        </div>
    );
};
