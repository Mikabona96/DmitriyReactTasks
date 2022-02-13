import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { Article } from './Article';

type Source = {
    title: string;
    description: string;
    published: string;
    likes: number;
    comments: number;
    image: string;
    tags: string[];
}[]

const NewsClassName = styled.section`
    display: flex;
    padding: 0;
    margin: 0;
`;
export const News: FC<Source> = (props) => {
    console.log(props);

    return (
        <NewsClassName className = 'news'>
            <Article />
        </NewsClassName>
    );
};

