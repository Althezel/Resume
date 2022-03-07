import * as React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorBoundaryFallback = (props: FallbackProps): JSX.Element => (
    <div role="alert">
        <p>Oops! Something went wrong.</p>
        <p>{props.error.message}</p>
        <p>Try refreshing the page. If the problem continues to occur, please send me a message on GitHub.</p>
    </div>
);

export default ErrorBoundaryFallback;
