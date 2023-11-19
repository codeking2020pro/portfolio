import React from 'react';
import './intro.css';
import introImg from '../../uwohos/My Pics/Pix2.jpg';
import btnImg from '../../uwohos/hireMe.png';
import {Link} from 'react-scroll';



const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='greetings'>Hello, </span>
        <span className='introText'>my name is <span className='introName'>Roland Omowoma. </span> </span>
        <p className='introParagraph'>I am a skilled frontend developer with experience at building <br></br> user-friendly websites and apps. </p>
        <Link><button className='btn'><img src={btnImg} alt='' className='btnImg'/>Hire Me</button></Link> 
      </div>
      <img src={introImg} alt='' className='introImg'/> 
      
    </section>
  )
}


export default Intro