import * as React from 'react';
import Heading from 'components/Heading';
import { ExperienceArticleProps } from 'types';

import './styles.scss';

const ExperienceArticle = (props: ExperienceArticleProps):JSX.Element => (
    <article className="experience">
        <Heading level={2} content={`${props.content.position} / ${props.content.entity}`} />
        {props.content.dates.map((date) => (
            <p key={date}>
                <em>{date}</em>
            </p>
        ))}
        <ul>
            {props.content.talkingPoints.map((point) => (
                <li key={point}>
                    {point}
                </li>
            ))}
        </ul>
    </article>
);

export default ExperienceArticle;
