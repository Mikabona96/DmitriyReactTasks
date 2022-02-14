import React, { FC, useState } from 'react';
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

type PropTypes = {
    likes: number
}

export const LikesCounter: FC<PropTypes> = (props) => {
    const [ likesCount, setLikesCount ] = useState(props.likes);

    return (
        <LikesCounterStyled
            onClick = {
                () => likesCount === props.likes
                    ? setLikesCount((prev) => prev + 1)
                    : setLikesCount(props.likes) }>{likesCount}
        </LikesCounterStyled>
    );
};
