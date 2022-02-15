// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const JavaScript: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.LinkWrapper>
                JavaScript Lessons
                <Link to = '/js/grid-keyboard'>Grid Keyboard</Link>
                <Link to = '/js/lesson2'>Lesson #2</Link>
                <Link to = '/js/lesson3'>Lesson #3</Link>
                <Link to = '/js/lesson4'>Lesson #4</Link>
                <Link to = '/js/lesson5'>Lesson #5</Link>
                <Link to = '/js/lesson6'>Lesson #6</Link>
                <Link to = '/js/lesson7'>Lesson #7</Link>
                <Link to = '/js/lesson9'>Lesson #9</Link>
                <Link to = '/js/lesson10'>Lesson #10</Link>
                <Link to = '/js/lesson11'>Lesson #11</Link>
                <Link to = '/js/lesson14'>Lesson #14</Link>
                <Link to = '/js/lesson15'>Lesson #15</Link>
                <Link to = '/js/lesson16'>Lesson #16</Link>
                <Link to = '/js/lesson17'>Lesson #17</Link>
                <Link to = '/js/lesson18'>Lesson #18</Link>
                <Link to = '/js/lesson20'>Lesson #20</Link>
                <Link to = '/js/lesson21'>Lesson #21</Link>
            </S.LinkWrapper>
            <S.Output>
                <Outlet />
            </S.Output>
        </S.Container>
    );
};
