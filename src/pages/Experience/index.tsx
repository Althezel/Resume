import * as React from 'react';
import Heading from 'components/Heading';
import ExperienceArticle from 'components/ExperienceArticle';
import ExperienceData from 'data/experience';
import { StyledSection, StyledHr } from 'styles';

const ExperiencePage = (): JSX.Element => (
    <>
        <Heading level={1} content="Experience" />
        <StyledHr />
        <StyledSection>
            {ExperienceData.map((experience) => (
                <ExperienceArticle
                    key={`${experience.position} - ${experience.entity}`}
                    content={experience}
                />
            ))}
        </StyledSection>
    </>
);

export default ExperiencePage;
