// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { RRComp } from '../../components/RRComp';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const ReactRedux: FC<PropTypes> = () => {
    return (
        <S.Container>
            <RRComp />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ReactRedux />
    </ErrorBoundary>
);
