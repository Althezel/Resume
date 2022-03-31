import * as React from 'react';
import Heading from 'components/Heading';
import ExperienceArticle from 'components/ExperienceArticle';
import ProjectData from 'data/projects';
import { StyledSection, StyledHr } from 'styles';

const ProjectsPage = (): JSX.Element => (
    <>
        <Heading level={1} content="Projects" />
        <StyledHr />
        <StyledSection>
            {ProjectData.map((experience) => (
                <ExperienceArticle
                    key={`${experience.position} - ${experience.entity}`}
                    content={experience}
                />
            ))}
        </StyledSection>
    </>
);

export default ProjectsPage;
