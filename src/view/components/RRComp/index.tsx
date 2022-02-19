/* eslint-disable @typescript-eslint/no-unused-vars */
// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, LinkWrapper } from '../JavaScript/styles';

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
        <Container>
            <LinkWrapper>
                <Link to = '/react-redux/lesson1-2'>Lesson 1-2</Link>
                <Link to = '/react-redux/lesson3'>Lesson 3</Link>
                <Link to = '/react-redux/lesson5'>Lesson 5</Link>
                <Link to = '/react-redux/lesson6'>Lesson 6</Link>
                <Link to = '/react-redux/lesson7'>Lesson 7</Link>
            </LinkWrapper>
            <Outlet />
        </Container>
    );
};
