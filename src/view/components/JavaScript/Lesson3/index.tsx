// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ContentWrapper, Links, TaskWrapper, Response } from '../styles';


export const Lesson3: FC = () => {
    return (
        <TaskWrapper>
            <ContentWrapper>
                <Links>
                    <Link to = '/js/lesson3/1'>Task #1</Link>
                    <Link to = '/js/lesson3/2'>Task #2</Link>
                    <Link to = '/js/lesson3/3'>Task #3</Link>
                    <Link to = '/js/lesson3/4'>Task #4</Link>
                    <Link to = '/js/lesson3/5'>Task #5</Link>
                    <Link to = '/js/lesson3/6'>Task #6</Link>
                    <Link to = '/js/lesson3/7'>Task #7</Link>
                    <Link to = '/js/lesson3/8'>Task #8</Link>
                </Links>
                <Response>
                    <Outlet />
                </Response>
            </ContentWrapper>
        </TaskWrapper>
    );
};
