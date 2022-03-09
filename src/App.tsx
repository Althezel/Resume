import React from 'react';
import {
    Route,
    Routes,
    BrowserRouter,
    Outlet,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import AboutPage from 'pages/About';
import ExperiencePage from 'pages/Experience';
import SkillsPage from 'pages/Skills';
import Header from 'components/Header/header';
import ErrorBoundaryFallback from 'components/ErrorBoundaryFallback';
import ProjectsPage from 'pages/Projects';

const App = (): JSX.Element => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route
                element={(
                    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
                        <Header />
                        <main>
                            <Outlet />
                        </main>
                    </ErrorBoundary>
                )}
            >
                <Route path="/" element={<AboutPage />} />
                <Route path="experience" element={<ExperiencePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="skills" element={<SkillsPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App;
