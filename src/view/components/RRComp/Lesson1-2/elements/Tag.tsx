import React, { FC } from 'react';
import styled from 'styled-components';

const TagsStyled = styled.div`
   display: flex;
      position: absolute;
      bottom: 20px;
      left: 35px;

    div {
        margin-right: 8px;

        &:last-child {
            margin-right: 0;
        }
    }
    .tag {
        background-color: orange;
        color: white;
        border: none;
        border-radius: 3px;
        padding: 6px 15px;
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 400;
    }
`;


export const Tag: FC = () => {
    return (
        <TagsStyled>
            <div>
                <span className = 'tag'>Literature</span>
            </div>
            <div>
                <span className = 'tag'>Books</span>
            </div>
        </TagsStyled>
    );
};
