import * as React from 'react';
import { SkillbarProps } from 'types';
import styled from 'styled-components';

const StyledSkill = styled.div<{ fillAmount: 1 | 2 | 3 | 4 | 5 }>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0;

    > .bar {
        flex: 5;
        margin: 0 2rem 0 0;
        border: solid 2px #2d2d2d;
        height: 20px;

        > .fill {
            height: 100%;
            background-color: lightseagreen;
            width: calc(${(props) => props.fillAmount * 20}%)
        }
    }
`;

const StyledSkillTitle = styled.p`
    flex: 2;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: right;
    padding: 0 2rem 0 0;
`;

const Skillbar = (props: SkillbarProps): JSX.Element => (
    <StyledSkill fillAmount={props.content.level}>
        <StyledSkillTitle>{props.content.name}</StyledSkillTitle>
        <div className="bar">
            <div className="fill" />
        </div>
    </StyledSkill>
);

export default Skillbar;
