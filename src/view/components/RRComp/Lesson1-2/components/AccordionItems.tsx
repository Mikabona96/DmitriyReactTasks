import React, { FC, useState } from 'react';

type PropTypes = {
    item: {
        question: string,
        answer: string
    }
}

export const AccordionItems: FC<PropTypes> = ({ item }) => {
    const [ select, setSelect ] = useState('');

    return (
        <div
            className = { `accordion-item ${select}` }
            key = { item.question }
            onClick = { () => {
                if (select === 'selected') {
                    setSelect('');
                } else {
                    setSelect('selected');
                }
            } }>
            <div className = 'accordion-question'>
                <span>{item.question}</span>
            </div>
            <p className = 'accordion-answer'>
                {item.answer}
            </p>
        </div>
    );
};
