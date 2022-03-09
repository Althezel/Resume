import * as React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NavBar from 'components/NavBar';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('<NavBar />', () => {
    test('renders all links', () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>,
        );
        expect(screen.getByText('About Me')).toBeInTheDocument();
        expect(screen.getByText('Experience')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('Skills')).toBeInTheDocument();
    });

    test('starts on "About Me" page', () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>,
        );
        expect(screen.getByText('About Me')).toHaveClass('active');
        expect(screen.getByText('Experience')).not.toHaveClass('active');
        expect(screen.getByText('Projects')).not.toHaveClass('active');
        expect(screen.getByText('Skills')).not.toHaveClass('active');
    });

    test('navigates through all links on click', () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>,
        );
        expect(screen.getByText('About Me')).toHaveClass('active');
        expect(screen.getByText('Experience')).not.toHaveClass('active');
        expect(screen.getByText('Projects')).not.toHaveClass('active');
        expect(screen.getByText('Skills')).not.toHaveClass('active');

        userEvent.click(screen.getByText('Experience'));
        expect(screen.getByText('Experience')).toHaveClass('active');
        expect(screen.getByText('About Me')).not.toHaveClass('active');
        expect(screen.getByText('Projects')).not.toHaveClass('active');
        expect(screen.getByText('Skills')).not.toHaveClass('active');

        userEvent.click(screen.getByText('Projects'));
        expect(screen.getByText('Projects')).toHaveClass('active');
        expect(screen.getByText('Experience')).not.toHaveClass('active');
        expect(screen.getByText('Skills')).not.toHaveClass('active');
        expect(screen.getByText('About Me')).not.toHaveClass('active');

        userEvent.click(screen.getByText('Skills'));
        expect(screen.getByText('Skills')).toHaveClass('active');
        expect(screen.getByText('Experience')).not.toHaveClass('active');
        expect(screen.getByText('Projects')).not.toHaveClass('active');
        expect(screen.getByText('About Me')).not.toHaveClass('active');
    });
});
