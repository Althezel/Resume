import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar';
import ErrorBoundaryFallback from 'components/ErrorBoundaryFallback';

import './styles.scss';

const Header = (): JSX.Element => (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <header>
            <NavBar />
        </header>
        <Outlet />
    </ErrorBoundary>
);

export default Header;
