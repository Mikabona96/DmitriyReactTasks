import React, { FC } from 'react';
import styled from 'styled-components';

const LikesCounterStyled = styled.span`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    &::before {
        content: '♥';
        display: inline;
        font-size: 11px;
        opacity: 0.6;
    }
`;

export const LikesCounter: FC = () => {
    return (
        <LikesCounterStyled>315</LikesCounterStyled>
    );
};
