import * as React from 'react';
import Heading from 'components/Heading';
import ExperienceArticle from 'components/ExperienceArticle';
import ProjectData from 'data/projects';

const ProjectsPage = (): JSX.Element => (
    <>
        <Heading level={1} content="Projects" />
        <hr />
        <section className="projects">
            {ProjectData.map((experience) => (
                <ExperienceArticle
                    key={`${experience.position} - ${experience.entity}`}
                    content={experience}
                />
            ))}
        </section>
    </>
);

export default ProjectsPage;
