import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.css';
//components
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Career from './Components/Career.js';
import Navigation from './Components/Layout/Navigation.js';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/career" component={Career} />        
      </BrowserRouter>
    </>
  );
}
