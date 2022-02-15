// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ContentWrapper, Links, TaskWrapper, Response } from '../styles';


export const Lesson2: FC = () => {
    return (
        <TaskWrapper>
            <ContentWrapper>
                <Links>
                    <Link to = '/js/lesson2/1'>Task #1</Link>
                    <Link to = '/js/lesson2/2'>Task #2</Link>
                    <Link to = '/js/lesson2/3'>Task #3</Link>
                    <Link to = '/js/lesson2/4'>Task #4</Link>
                    <Link to = '/js/lesson2/5'>Task #5</Link>
                    <Link to = '/js/lesson2/6'>Task #6</Link>
                    <Link to = '/js/lesson2/7'>Task #7</Link>
                    <Link to = '/js/lesson2/8'>Task #8</Link>
                    <Link to = '/js/lesson2/9'>Task #9</Link>
                    <Link to = '/js/lesson2/10'>Task #10</Link>
                    <Link to = '/js/lesson2/11'>Task #11</Link>
                    <Link to = '/js/lesson2/12'>Task #12</Link>
                    <Link to = '/js/lesson2/13'>Task #13</Link>
                    <Link to = '/js/lesson2/14'>Task #14</Link>
                </Links>
                <Response>
                    <Outlet />
                </Response>
            </ContentWrapper>
        </TaskWrapper>

    );
};
