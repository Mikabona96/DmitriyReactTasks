// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const Lesson5: FC = () => {
    return (
        <div>
            <Link to = '/js/lesson5/1'>Task #1</Link>
            <Link to = '/js/lesson5/2'>Task #2</Link>
            <Link to = '/js/lesson5/3'>Task #3</Link>
            <Link to = '/js/lesson5/4'>Task #4</Link>
            <Outlet />
        </div>
    );
};
