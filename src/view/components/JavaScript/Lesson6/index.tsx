// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Lesson6: FC = () => {
    return (
        <div>
            <Link to = '/js/lesson6/1'>Task #1</Link>
            <Link to = '/js/lesson6/2'>Task #2</Link>
            <Link to = '/js/lesson6/3'>Task #3</Link>
            <Link to = '/js/lesson6/4'>Task #4</Link>
            <Link to = '/js/lesson6/5'>Task #5</Link>
            <Outlet />
        </div>
    );
};
