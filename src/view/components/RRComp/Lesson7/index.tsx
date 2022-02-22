import React, { FC } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../pages/ReactRedux/styles';


const Padding = styled.div`
    padding: 20px;
    margin-top: 50px;
`;
export const LessonSeven: FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Padding>
                <div>
                    <Link to = '/lesson7/people'>People</Link>
                    <Link to = '/lesson7/films'>Films</Link>
                </div>
                <Outlet />
            </Padding>
            <Button onClick = { () => {
                navigate(-1);
            } }>&#129092;
            </Button>
        </>
    );
};
