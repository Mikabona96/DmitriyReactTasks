// Core
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

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
    const location = useLocation();
    console.log(location);

    return (
        <S.Container>
            <RRComp />
            {location.pathname === '/' ? null : <S.Button>&#129092;</S.Button>}
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ReactRedux />
    </ErrorBoundary>
);
