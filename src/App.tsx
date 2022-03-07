import React from 'react';
import {
    Route,
    Routes,
    BrowserRouter,
} from 'react-router-dom';
import AboutPage from 'pages/About';
import ExperiencePage from 'pages/Experience';
import SkillsPage from 'pages/Skills';
import Header from 'components/Header/header';

const App = (): JSX.Element => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route element={<Header />}>
                <Route path="/" element={<AboutPage />} />
                <Route path="experience" element={<ExperiencePage />} />
                <Route path="skills" element={<SkillsPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App;
