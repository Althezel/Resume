import * as React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skillbar from 'components/Skill';
import { Skill } from 'types';

afterEach(cleanup);

const TestSkill: Skill = {
    name: 'Test Skill',
    level: 5,
};

describe('<Skillbar />', () => {
    test('proper text is displayed', () => {
        render(<Skillbar content={TestSkill} />);
        expect(screen.getByText('Test Skill')).toBeInTheDocument();
    });
});
