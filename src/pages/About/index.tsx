import * as React from 'react';
import Heading from 'components/Heading';

import './styles.scss';

const ContactInfoArticle = (): JSX.Element => (
    <article>
        <Heading level={2} content="Contact Information" />
        <p>
            <strong>Name: </strong>
            Logan A. Whompton
        </p>
        <p>
            <strong>Github:</strong>
            <a
                href="https://www.github.com/Althezel"
                rel="noreferrer noopener"
                target="_blank"
            >
                www.github.com/Althezel
            </a>
        </p>
        <p>
            <strong>LinkedIn:</strong>
            <a
                href="https://www.linkedin.com/in/logan-whompton"
                rel="noreferrer noopener"
                target="_blank"
            >
                www.linkedin.com/in/logan-whompton
            </a>
        </p>
    </article>
);

const EducationArticle = (): JSX.Element => (
    <article>
        <Heading level={2} content="Education" />
        <Heading level={4} content="Virginia Polytechnic Institute and State University" />
        <Heading level={5} content="B.S. Mining and Minerals Engineering" />
        <p>AUGUST 2011 - MAY 2015, BLACKSBURG, VA</p>
    </article>
);

const AboutPage = (): JSX.Element => (
    <>
        <Heading level={1} content="About Me" />
        <hr />
        <section className="about">
            <ContactInfoArticle />
            <hr />
            <EducationArticle />
        </section>
    </>
);

export default AboutPage;
