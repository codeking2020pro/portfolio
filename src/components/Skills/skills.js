import React from 'react'
import './skills.css'
import HTMLlogo from '../../uwohos/skills/html5-icon.png'
import CSSlogo from '../../uwohos/skills/css3-icon.png'
import ReactLogo from '../../uwohos/skills/react-icon3.png'


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>Skills</span>
        <span className='skillDesc'>Apart from Frontend Development, I'm going to be ready as a full-stack developer before December 1, 2023.
        Data Science proficiency using Python and it's libraries with MongoDB is in view before the end of the first quarter in the year 2024. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={HTMLlogo} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>HTML 5 Dexter</h2>
                    <p>HTML 5 finds home with Roland in the build up of websites & apps</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={CSSlogo} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>CSS Maestro</h2>
                    <p>Astonishing designs you'd be proud of are the results of the styles I prefer.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={ReactLogo} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Reactor!</h2>
                    <p>No dull moment with websites and apps cultivated by my very self. You should engage me for an experience you'll relive with satifaction.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills