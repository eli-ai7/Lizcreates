import React from 'react'
import './App.css';
import { motion } from "framer-motion";

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const slowerTextVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1, // Adjust the duration as needed
        staggerChildren: 0.1,
      },
    },
  };

const Projectspage = () => {
    return (
        <div className='App'>
         <div className="backbutton1">
         <a href="/" className="button-link3">
            BACK
         </a>
      </div>   
      
      <motion.div className="container"
       variants={textVariants}
       initial="initial" 
       animate="animate">

        <motion.div className="img">
            <motion.img variants={textVariants} src='./images/webpage.png' alt=''/>
        </motion.div>

        <motion.div className="websiteinfo" variants={textVariants}>
            <motion.span className="websiteinfo-span">This Website <br/></motion.span>
            <motion.span className="websiteinfo-span2">A Portfolio Website<br/></motion.span>
            <motion.span className="websiteinfo-span3">
            Tools: React, Figma, Framer Motion, Github<br/>
            To build this website I designed my wireframes and UX<br/>
            designs using Figma. After completing those, I used<br/>
            React and Framer Motion to build the webpages with<br/>
            the animations.<br/>
            </motion.span>
        </motion.div>

    </motion.div>

    <motion.div className="container2" variants={slowerTextVariants} initial="initial" animate="animate">
        <motion.div className="img2">
          <img src="./images/detect1.png" alt="" />
          <img src="./images/detect2.png" alt="" />
          <img src="./images/detect3.png" alt="" />
        </motion.div>

        <div className="detectinfo">
          <span>
            <span className="detectinfo-span">Detect+ <br /></span>
            <span className="detectinfo-span2">Skin Cancer Detection Program<br /></span>
            <span className="detectinfo-span3">
              Tools: Python, Tkinter, PIL (Pillow), NumPy, OpenCV (cv2), imgaug, scikit-learn, Joblib
              <br />
              The user uploads an image, and the trained SVM model predicts whether the skin lesion is benign or malignant,
              displaying the result in a Tkinter-based graphical user interface.
              <br />
              <br />Github: Coming soon
            </span>
          </span>
        </div>
      </motion.div>

        </div>
        
    );
};

export default Projectspage;