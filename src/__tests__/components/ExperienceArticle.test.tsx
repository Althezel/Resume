import * as React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceArticle from 'components/ExperienceArticle';
import { Experience } from 'types';

afterEach(cleanup);

const TestExperience: Experience = {
    entity: 'Test Entity Name',
    position: 'Test Position Name',
    dates: [
        'date 1 - date 2',
        'date 3 - date 4',
    ],
    talkingPoints: [
        'test point 1',
        'test point 2',
    ],
};

describe('<ExperienceArticle />', () => {
    test('renders position / entity', () => {
        render(<ExperienceArticle content={TestExperience} />);
        expect(screen.getByText('Test Position Name / Test Entity Name')).toBeInTheDocument();
    });

    test('renders dates', () => {
        render(<ExperienceArticle content={TestExperience} />);
        expect(screen.getByText('date 1 - date 2')).toBeInTheDocument();
        expect(screen.getByText('date 3 - date 4')).toBeInTheDocument();
    });

    test('renders talking points list', () => {
        render(<ExperienceArticle content={TestExperience} />);
        expect(screen.getByText('test point 1')).toBeInTheDocument();
        expect(screen.getByText('test point 2')).toBeInTheDocument();
    });
});
