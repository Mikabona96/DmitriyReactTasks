// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const Lesson9: FC = () => {
    return (
        <div>
            <Link to = '/js/lesson9/1'>Task #1</Link>
            <Outlet />
        </div>
    );
};
