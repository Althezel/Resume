import * as React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (): JSX.Element => (
    <nav>
        <ul>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                    About Me
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/experience"
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                    Experience
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/skills"
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                    Skills
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default NavBar;
