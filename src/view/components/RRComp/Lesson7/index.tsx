import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LinkWrapper } from '../../JavaScript/styles';
export const LessonSeven: FC = () => {
    return (
        <div>
            <LinkWrapper>
                <Link to = '/react-redux/lesson7/people'>People</Link>
                <Link to = '/react-redux/lesson7/films'>Films</Link>
            </LinkWrapper>
            <Outlet />
        </div>
    );
};
