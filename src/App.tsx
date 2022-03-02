import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AboutPage from 'pages/About';
import ExperiencePage from 'pages/Experience';
import SkillsPage from 'pages/Skills';

const App = (): JSX.Element => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="skills" element={<SkillsPage />} />
        </Routes>
    </BrowserRouter>
);

export default App;
