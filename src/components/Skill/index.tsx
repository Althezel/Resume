import * as React from 'react';
import { SkillbarProps } from 'types';

import './styles.scss';

const Skillbar = (props: SkillbarProps):JSX.Element => (
    <div className="skill">
        <p>{props.content.name}</p>
        <div
            className="skill__bar"
        >
            <div className={`skill__bar__${props.content.level}`} />
        </div>
    </div>
);

export default Skillbar;
