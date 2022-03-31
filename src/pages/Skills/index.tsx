import * as React from 'react';
import Heading from 'components/Heading';
import Skillbar from 'components/Skill';
import SkillData from 'data/skills';
import { StyledSection, StyledHr } from 'styles';

const SkillsPage = (): JSX.Element => (
    <>
        <Heading level={1} content="Skills" />
        <StyledHr />
        <StyledSection>
            {SkillData.map((skill) => (
                <Skillbar
                    key={`${skill.name}-${skill.level}`}
                    content={skill}
                />
            ))}
        </StyledSection>
    </>
);

export default SkillsPage;
