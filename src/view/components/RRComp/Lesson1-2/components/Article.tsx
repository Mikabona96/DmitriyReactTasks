import React, { FC } from 'react';
import { CommentsCounter } from '../elements/CommentsCounter';
import { LikesCounter } from '../elements/LikesCounter';
import { Tag } from '../elements/Tag';
import { ArticleStyled } from '../styles';
import moment from 'moment';


type PropTypes = {
    title: string;
    description: string;
    published: string;
    likes: number;
    comments: number;
    image: string;
    tags: string[];
}


export const Article: FC<PropTypes> = (props) => {
    return (
        <ArticleStyled className = 'article'>
            <header>
                <div className = 'poster'>
                    <img
                        alt = ''
                        src = { props.image }
                    />
                </div>
                <Tag tags = { props.tags }/>
            </header>
            <article>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </article>
            <footer>
                <span>{moment(props.published).format('YY.MM.DD')}</span>
                <div className = 'controls'>
                    <CommentsCounter comments = { props.comments }/>
                    <LikesCounter likes = { props.likes } />
                </div>
            </footer>
        </ArticleStyled>
    );
};
