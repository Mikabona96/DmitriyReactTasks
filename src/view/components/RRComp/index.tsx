/* eslint-disable @typescript-eslint/no-unused-vars */
// Core
import React, { FC } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';
// Types
type PropTypes = {
    /* type props here */
}

export const RRComp: FC<PropTypes> = () => {
    const navigate = useNavigate();

    return (
        <S.LinkWrapper>
            <S.Wrapper>
                <S.Link onClick = { () => {
                    navigate('/lesson1-2');
                } }>Lesson 1-2
                </S.Link>
                <S.Link onClick = { () => {
                    navigate('/lesson3');
                } }>Lesson 3
                </S.Link>
                <S.Link onClick = { () => {
                    navigate('/lesson5');
                } }>Lesson 5
                </S.Link>
            </S.Wrapper>
            <S.Wrapper>
                <S.Link2 onClick = { () => {
                    navigate('/lesson6');
                } }>Lesson6
                </S.Link2>
                <S.Link2 onClick = { () => {
                    navigate('/lesson7');
                } }>Lesson 7
                </S.Link2>
            </S.Wrapper>
        </S.LinkWrapper>
    );
};
