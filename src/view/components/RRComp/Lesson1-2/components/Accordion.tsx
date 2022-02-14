import React, { FC } from 'react';
import { AccordionStyled } from '../styles';
import { AccordionItems } from './AccordionItems';


type Items = {
    question: string;
    answer: string;
}

type PropTypes = {
    array: Array<Items>
}

export const Accordion: FC<PropTypes> = ({ array }) => {
    return (
        <AccordionStyled className = 'accordion'>
            <h1>Accordion</h1>
            {
                array.map((item) => {
                    return (

                        <AccordionItems item = { item }/>
                        // <div
                        //     className = 'accordion-item'
                        //     key = { item.question }>
                        //     <div className = 'accordion-question'>
                        //         <span>{item.question}</span>
                        //     </div>
                        //     <p className = 'accordion-answer'>
                        //         {item.answer}
                        //     </p>
                        // </div>
                    );
                })
            }
        </AccordionStyled>
    );
};
