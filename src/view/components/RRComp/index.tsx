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

export const RRComp: FC<PropTypes> = () => {
    return (
        <S.Container>
            <Link to = '/react-redux/lesson1-2'>Lesson 1-2</Link>
            <Outlet />
        </S.Container>
    );
};
