// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const Lesson7: FC = () => {
    return (
        <div>
            <Link to = '/js/lesson7/1'>Task #1</Link>
            <Link to = '/js/lesson7/2'>Task #2</Link>
            <Link to = '/js/lesson7/3'>Task #3</Link>
            <Outlet />
        </div>
    );
};
