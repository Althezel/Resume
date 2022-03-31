import * as React from 'react';
import Heading from 'components/Heading';
import styled from 'styled-components';
import { StyledSection, StyledHr } from 'styles';

const StyledAboutArticle = styled.article`
    & > *:not(h2) {
        padding: 0 0 0 2rem;
    }  
`;

const StyledAnchor = styled.a`
    margin: 0 0 0 0.25rem;
    color: blue;  
`;

const ContactInfoArticle = (): JSX.Element => (
    <StyledAboutArticle>
        <Heading level={2} content="Contact Information" />
        <p>
            <strong>Name: </strong>
            Logan A. Whompton
        </p>
        <p>
            <strong>Github:</strong>
            <StyledAnchor
                href="https://www.github.com/Althezel"
                rel="noreferrer noopener"
                target="_blank"
            >
                www.github.com/Althezel
            </StyledAnchor>
        </p>
        <p>
            <strong>LinkedIn:</strong>
            <StyledAnchor
                href="https://www.linkedin.com/in/logan-whompton"
                rel="noreferrer noopener"
                target="_blank"
            >
                www.linkedin.com/in/logan-whompton
            </StyledAnchor>
        </p>
    </StyledAboutArticle>
);

const EducationArticle = (): JSX.Element => (
    <StyledAboutArticle>
        <Heading level={2} content="Education" />
        <Heading level={4} content="Virginia Polytechnic Institute and State University" />
        <Heading level={5} content="B.S. Mining and Minerals Engineering" />
        <p>AUGUST 2011 - MAY 2015, BLACKSBURG, VA</p>
    </StyledAboutArticle>
);

const AboutPage = (): JSX.Element => (
    <>
        <Heading level={1} content="About Me" />
        <StyledHr />
        <StyledSection>
            <ContactInfoArticle />
            <StyledHr />
            <EducationArticle />
        </StyledSection>
    </>
);

export default AboutPage;
