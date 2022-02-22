import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../pages/ReactRedux/styles';
import { StudentRegistration } from './components/StudentRegistration';

export const Padding = styled.div`
    padding: 20px;
    margin-top: 50px;
`;

export const LessonFive: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Padding>
                <StudentRegistration />
            </Padding>
            <Button onClick = { () => {
                navigate(-1);
            } }>&#129092;
            </Button>
        </>
    );
};
