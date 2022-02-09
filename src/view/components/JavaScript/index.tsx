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
            JavaScript Lessons
            <Link to = '/js/1'>Task #1</Link>
            <Link to = '/js/1'>Task #2</Link>
            <Link to = '/js/1'>Task #3</Link>
            <Link to = '/js/1'>Task #4</Link>
            <Link to = '/js/1'>Task #5</Link>
            <Link to = '/js/1'>Task #6</Link>
            <Link to = '/js/1'>Task #7</Link>
            <Link to = '/js/1'>Task #8</Link>
            <Link to = '/js/1'>Task #9</Link>
            <Link to = '/js/1'>Task #10</Link>
            <Outlet />
        </S.Container>
    );
};
