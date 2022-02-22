import React, { FC } from 'react';
import { Response } from './styles';
import { Accordion } from './components/Accordion';
import { News } from './components/News';
import source from './source.json';
import { Button } from '../../../pages/ReactRedux/styles';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        question: 'What is your name?',
        answer:   'My name is Anton',
    },
    {
        question: 'What is your Business?',
        answer:   'Fried Chicken',
    },
    {
        question: 'Where are you from?',
        answer:   'Zhashkiv',
    },
];

export const LessonOneTwo: FC = () => {
    const navigate = useNavigate();

    return (
        <Response>
            <News
                array = { source }
            />
            <Accordion array = { data } />
            <Button onClick = { () => {
                navigate(-1);
            } }>&#129092;
            </Button>
        </Response>
    );
};
