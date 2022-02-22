import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Student } from '../../../../bus/student';
import { Button } from '../../../pages/ReactRedux/styles';

export const Padding = styled.div`
    padding: 20px;
    margin-top: 50px;
`;

export const LessonSix: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Button onClick = { () => {
                navigate(-1);
            } }>&#129092;
            </Button>
            <Padding>
                <Student />
            </Padding>
        </>
    );
};
