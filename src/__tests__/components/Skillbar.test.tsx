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
    test('has proper className', () => {
        render(<Skillbar content={TestSkill} />);
        expect(document.querySelector('div')?.children[0]).toHaveClass('skill');
    });

    test('fill bar container has proper classname', () => {
        render(<Skillbar content={TestSkill} />);
        expect(document.querySelector('div')?.children[0].children[1]).toHaveClass('skill__bar');
    });

    test('the fill bar has proper className', () => {
        render(<Skillbar content={TestSkill} />);
        expect(document.querySelector('.skill__bar')?.children[0]).toHaveClass('skill__bar__5');
    });

    test('proper text is displayed', () => {
        render(<Skillbar content={TestSkill} />);
        expect(screen.getByText('Test Skill')).toBeInTheDocument();
    });
});
