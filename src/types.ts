export type Experience = {
    entity: string;
    position: string;
    dates: string[];
    talkingPoints: string[];
};

export type ExperienceArticleProps = {
    content: Experience;
};

export type Skill = {
    name: string;
    level: 1 | 2 | 3 | 4 | 5;
}

export type SkillbarProps = {
    content: Skill;
}
