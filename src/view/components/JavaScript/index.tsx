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
                <Link to = '/js/lesson2'>Lesson #2</Link>
                <Link to = '/js/lesson3'>Lesson #3</Link>
            </S.LinkWrapper>
            <Outlet />
        </S.Container>
    );
};
