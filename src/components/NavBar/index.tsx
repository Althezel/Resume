import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 60%;

    > ul {
        width: 100%;
        padding: 0;

        > li {
            width: 100%;
            height: 40px;
            border-bottom: solid 2px #2d2d2d;
        }
    }
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    position: relative;
    top: -1px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: #2d2d2d;
    font-size: 1.75rem;
    border-bottom: solid 5px rgba(255, 0, 0, 0);
    transition: 0.75s all;

    &.active {
        color: red;
        border-bottom: solid 5px rgba(255, 0, 0, 1);
    }
`;

const NavBar = (): JSX.Element => (
    <StyledNav>
        <StyledUl>
            <li>
                <StyledNavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                    About Me
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink
                    to="/experience"
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                    Experience
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink
                    to="/projects"
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                    Projects
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink
                    to="/skills"
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                    Skills
                </StyledNavLink>
            </li>
        </StyledUl>
    </StyledNav>
);

export default NavBar;
