// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ContentWrapper, Links, TaskWrapper, Response } from '../styles';


export const Lesson16: FC = () => {
    return (
        <TaskWrapper>
            <ContentWrapper>
                <Links>
                    <Link to = '/js/lesson16/1'>Task #1</Link>
                    <Link to = '/js/lesson16/2'>Task #2</Link>
                    <Link to = '/js/lesson16/3'>Task #3</Link>
                    <Link to = '/js/lesson16/4'>Task #4</Link>
                </Links>
                <Response>
                    <Outlet />
                </Response>
            </ContentWrapper>
        </TaskWrapper>
    );
};
