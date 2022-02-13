import React, { FC } from 'react';
import { News } from './components/News';
import source from './source.json';

export const LessonOneTwo: FC = () => {
    return (
        <div>
            <News source = { source }/>
        </div>
    );
};
