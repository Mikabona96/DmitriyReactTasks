import React, { useState, FC } from 'react';
import { Card } from '../news/styles';

type PropTypes = {
    name: string;
    id: number;
    phone: string;
    website: string;
    email: string;
    address?: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    };
    company: {
        name: string;
        bs: string;
        catchPhrase: string;
    }
}

export const Article: FC<PropTypes> = (props) => {
    const { id, name, phone, email, company, website } = props;
    const confirmedJSX = <h1>Новость подтверждена</h1>;
    const [ isArticleVisible, setVisibility ] = useState(false);


    const showArticle = ()=>{
        setVisibility(true);
    };

    const articleJSX = (
        <div key = { id }>
            <h4>Name: {name}</h4>
            <p>Phone: {phone}</p>
            <p>E-mail: {email}</p>
            <p>Company: {company.name}</p>
            <p>Website: {website}</p>
            {confirmedJSX}
        </div>
    );

    const showJSX = (
        <>
            <p>
                Article is hidden, but if you want to open it, just
                <button onClick = { showArticle }>Click Here !</button>
            </p>
        </>
    );


    return (
        <Card>
            {isArticleVisible ?  articleJSX : showJSX}
        </Card>
    );
};
