import * as React from 'react';
import styled from 'styled-components';
import NavBar from 'components/NavBar';

const StyledHeader = styled.header`
    z-index: 10;
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 2rem 0 4rem 0;
    background-color: whitesmoke;
    border-bottom: solid 2px #2d2d2d;
`;

const Header = (): JSX.Element => (
    <StyledHeader>
        <NavBar />
    </StyledHeader>
);

export default Header;
