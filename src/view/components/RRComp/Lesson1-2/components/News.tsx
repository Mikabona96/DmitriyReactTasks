import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { Article } from './Article';
// import source from '../source.json';

type Item = {
    title: string;
    description: string;
    published: string;
    likes: number;
    comments: number;
    image: string;
    tags: string[];
}

type PropTypes = {
    array: Array<Item>
}

const NewsClassName = styled.section`
    display: flex;
    padding: 0;
    margin: 0;
`;

export const News: FC<PropTypes> = ({ array }) => {
    return (
        <NewsClassName className = 'news'>
            {
                array.map((news, i) => {
                    return (
                        <Article
                            comments = { news.comments }
                            description = { news.description }
                            image = { news.image }
                            key = { i }
                            likes = { news.likes }
                            published = { news.published }
                            tags = { news.tags }
                            title = { news.title }
                        />
                    );
                })
            }
        </NewsClassName>
    );
};

