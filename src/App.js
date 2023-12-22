import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function App (){
  return (
    <div className="App">
      <div className="contact">
      <Link to="/Contactpage" className="button-link">
  CONTACT
       </Link>
      </div>
      <div className="projects">
        <Link to="/Projectspage" className="button-link2">
  PROJECTS
        </Link>
      </div>
      
      <div className='title1'>
      Elizabeth Akyirem
      </div>
      <div className='info'>FRONT-END/UI/UX/SOFTWARE DEVELOPER</div>
      <div className="description1-container">
      <div className="description1">
      Welcome to my portfolio website which some of my creations from my past projects, 
      I hope to collaborate with you soon.
       </div>
    </div>

      <div className='line1'></div>
      <div className='line3'></div>
      <div className='line2'></div>
      <div className='line4'></div>
      <div className='line5'></div>
      <div className='line6'></div>
    
    </div>
  );
}

export default App;
