import React, { FC } from 'react';
import { CommentsCounter } from '../elements/CommentsCounter';
import { LikesCounter } from '../elements/LikesCounter';
import { Tag } from '../elements/Tag';
import * as S from '../styles';
import source from '../source.json';

export const Article: FC = () => {
    const arr = source;

    return (
        arr.map((article: any, i: number) => {
            return (
                <S.ArticleStyled key = { i }>
                    <header>
                        <div className = 'poster'>
                            <img
                                alt = ''
                                src = 'https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png'
                            />
                        </div>
                        <Tag />
                    </header>
                    <article>
                        <h1>American writer of bad cowboy stories arrived in</h1>
                        <p>Volunteering to help people in need combined with travelling to faraway places is a new </p>
                    </article>
                    <footer>
                        <span>15.07.2017</span>
                        <div className = 'controls'>
                            <CommentsCounter source = { source }/>
                            <LikesCounter />
                        </div>
                    </footer>
                </S.ArticleStyled>
            );
        })

    );
};
