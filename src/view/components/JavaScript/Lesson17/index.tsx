// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const Lesson17: FC = () => {
    return (
        <div>
            <Link to = '/js/lesson17/1'>Task #1</Link>
            <Outlet />
        </div>
    );
};
