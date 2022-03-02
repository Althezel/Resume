import * as React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from 'components/Heading';

afterEach(cleanup);

describe('<Heading />', () => {
    test('renders text', () => {
        render(<Heading level={1} content="Test Heading" />);
        expect(screen.getByText('Test Heading')).toBeInTheDocument();
    });

    test('does not render when empty', () => {
        render(
            <div id="root">
                <Heading level={1} content="" />
            </div>,
        );
        expect(document.getElementById('root')?.children.length).toBe(0);
    });
});
