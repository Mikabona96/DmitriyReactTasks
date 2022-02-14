// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const Lesson15: FC = () => {
    return (
        <div>
            <Link to = '/js/lesson15/1'>Task #1</Link>
            <Link to = '/js/lesson15/2'>Task #2</Link>
            <Outlet />
        </div>
    );
};
