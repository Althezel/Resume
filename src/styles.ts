import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Cambria, serif, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        div#root {
            min-height: 100vh;
            height: 100%;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            color: #2d2d2d;
            background-image: linear-gradient(to right, #898989, whitesmoke 50%, #898989 100%);
            background-size: 100%;
            background-repeat: no-repeat;
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    main {
        z-index: 1;
        position: relative;
        min-height: 100vh;
        height: 100%;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0 2rem;
        border-left: solid 2px #2d2d2d;
        border-right: solid 2px #2d2d2d;
        border-bottom: solid 2px #2d2d2d;
        background-color: whitesmoke;
    }

    h1, h2, h3, h4, h5, h6 {
        display: block;
        font-weight: bold;
    }

    a {
        font-weight: bold;
    }

    p, span {
        display: block;
        font-weight: normal;
    }

    h1 {
        align-self: center;
        font-size: 2.25rem;
        margin: 16px 0;
    }

    h2 {
        font-size: 2rem;
        margin: 12px 0;
    }

    h3 {
        font-size: 1.75rem;
        margin: 8px 0;
    }

    h4 {
        font-size: 1.5rem;
        margin: 8px 0;
    }

    h5 {
        font-size: 1.25rem;
        margin: 8px 0;
    }

    h6, p, a, li {
        font-size: 1.125rem;
        margin: 8px 0;
    }
`;

export const StyledSection = styled.section`
    width: 100%;
            
    & > article {
        padding: 0 0 0 2rem;
        margin: 0 0 2rem 0;
    }
`;

export const StyledHr = styled.hr`
    width: 100%;
    margin: 1rem 0;
    border: solid 1px #c9c9c9;
`;
