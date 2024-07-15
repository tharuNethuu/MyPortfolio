import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import './app.scss';
import Contacts from './components/contacts/Contacts';
import Experiences from './components/experiences/Experiences';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import ProjectDetails from './components/projects/ProjectDetails';

const App = () => {
  return (
    <Router> {/* Wrap with BrowserRouter */}
      <div>
        {/* Define routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="Homepage">
                  <Navbar />
                  <Hero />
                </section>

                <section id="Services">
                  <Parallax type="services" />
                </section>
                <section>
                  <Experiences />
                </section>
                <section id="Portfolio">
                  <Parallax type="portfolio" />
                </section>  <Portfolio/>

                <section id="Contact">
                  <Contacts />
                </section>
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
