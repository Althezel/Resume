import * as React from 'react';

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    content: string;
    className?: string;
}

const Heading = (props: HeadingProps): JSX.Element | null => (
    props.content.trim() !== ''
        ? (
            React.createElement(
                `h${props.level}`,
                {
                    className: props.className,
                },
                props.content,
            )
        ) : (
            null
        )
);

export default Heading;
