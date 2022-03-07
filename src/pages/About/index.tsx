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
        <p className="link_container">
            <strong>Github:</strong>
            <a
                href="https://www.github.com/Althezel"
                rel="noreferrer noopener"
                target="_blank"
            >
                www.github.com/Althezel
            </a>
        </p>
        <p className="link_container">
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

const AboutPage = (): JSX.Element => (
    <main>
        <section>
            <Heading level={1} content="About" />
            <ContactInfoArticle />
        </section>
    </main>
);

export default AboutPage;
