// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { JavaScript } from '../../components/JavaScript';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Js: FC<PropTypes> = () => {
    return (
        <S.Container>
            <JavaScript />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Js />
    </ErrorBoundary>
);
