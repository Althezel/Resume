import React from 'react';
import {
    Route,
    Routes,
    BrowserRouter,
    Outlet,
} from 'react-router-dom';
import AboutPage from 'pages/About';
import ExperiencePage from 'pages/Experience';
import SkillsPage from 'pages/Skills';
import NavBar from 'components/NavBar';

const App = (): JSX.Element => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route
                element={(
                    <>
                        <header>
                            <NavBar />
                        </header>
                        <Outlet />
                    </>
                )}
            >
                <Route path="/" element={<AboutPage />} />
                <Route path="experience" element={<ExperiencePage />} />
                <Route path="skills" element={<SkillsPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App;
