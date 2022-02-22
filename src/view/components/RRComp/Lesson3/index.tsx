import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../pages/ReactRedux/styles';
import { Header } from './header';
import { News } from './news';
import { useApiLoader } from './news/useApiLoader';

const Section = styled.section`
    margin-top: 50px;
`;
export const Padding = styled.div`
    padding: 20px;
`;

export const LessonThree = ()=> {
    const { isFetching } = useApiLoader();
    const navigate = useNavigate();

    return (
        <Section>
            <Padding>
                <Header/>
                {isFetching ? <div>Загрузка данных...</div> : <News/>}
            </Padding>
            <Button onClick = { () => {
                navigate(-1);
            } }>&#129092;
            </Button>
        </Section>
    );
};
