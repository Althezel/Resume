export type Experience = {
    entity: string;
    position: string;
    dates: string[];
    talkingPoints: string[];
};

export type ExperienceArticleProps = {
    content: Experience;
};
