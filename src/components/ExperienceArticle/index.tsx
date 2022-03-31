import * as React from 'react';
import Heading from 'components/Heading';
import { ExperienceArticleProps } from 'types';
import styled from 'styled-components';

const StyledUl = styled.ul`
    margin-block: 0;
    padding: 0 0 0 4rem;
`;

const ExperienceArticle = (props: ExperienceArticleProps):JSX.Element => (
    <article className="experience">
        <Heading level={2} content={`${props.content.position} / ${props.content.entity}`} />
        {props.content.dates.map((date) => (
            <p key={date}>
                <em>{date}</em>
            </p>
        ))}
        <StyledUl>
            {props.content.talkingPoints.map((point) => (
                <li key={point}>
                    {point}
                </li>
            ))}
        </StyledUl>
    </article>
);

export default ExperienceArticle;
