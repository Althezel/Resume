import * as React from 'react';
import Heading from 'components/Heading';
import Skillbar from 'components/Skill';
import SkillData from 'data/skills';

const SkillsPage = (): JSX.Element => (
    <>
        <Heading level={1} content="Skills" />
        <hr />
        <section>
            {SkillData.map((skill) => (
                <Skillbar
                    key={`${skill.name}-${skill.level}`}
                    content={skill}
                />
            ))}
        </section>
    </>
);

export default SkillsPage;
