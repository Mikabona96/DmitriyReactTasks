// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const Lesson14: FC = () => {
    return (
        <div>
            <Link to = '/js/lesson14/1'>Task #1</Link>
            <Link to = '/js/lesson14/2'>Task #2</Link>
            <Outlet />
        </div>
    );
};
