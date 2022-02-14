// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const Lesson11: FC = () => {
    return (
        <div>
            <Link to = '/js/lesson11/1'>Task #1</Link>
            <Link to = '/js/lesson11/2'>Task #2</Link>
            <Link to = '/js/lesson11/3'>Task #3</Link>
            <Link to = '/js/lesson11/4'>Task #4</Link>
            <Outlet />
        </div>
    );
};
