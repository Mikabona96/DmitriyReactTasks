import React from 'react';
import styled from 'styled-components';
import { Header } from './header';
import { News } from './news';
import { useApiLoader } from './news/useApiLoader';

const Section = styled.section`
    padding: 20px;
`;

export const LessonThree = ()=> {
    const { isFetching } = useApiLoader();

    return (
        <Section>
            <Header/>
            {isFetching ? <div>Загрузка данных...</div> : <News/>}
        </Section>
    );
};
