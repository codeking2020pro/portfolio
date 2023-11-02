import React from 'react'
import './works.css'
import CalculatorMockUp from '../../uwohos/portfolio-project-mockups/SimpleCalculator.png'
import AfricaViewMockUp from '../../uwohos/portfolio-project-mockups/africaview.com.png'
import TPOICwebsite from '../../uwohos/portfolio-project-mockups/impactliving.com.png'
import ChatApp from '../../uwohos/portfolio-project-mockups/chatApp.png'
import PercentCalc from '../../uwohos/portfolio-project-mockups/PercentageCalculator.png'
import PortfolioJS from '../../uwohos/portfolio-project-mockups/portfolio-with-plain-js.png'

const Works = () => {
  return (
    <section id='works'>
        <span className='worksTitle'>Roland's ShowRoom</span>
        <span className='worksDesc'>Apart from Frontend Development, I'm going to be ready as a full-stack developer before December 1, 2023.
        Data Science proficiency using Python and it's libraries with MongoDB is in view before the end of the first quarter in the year 2024. </span>
        <div className='worksImgs'>
            <img src={CalculatorMockUp} alt='' className='worksImg' />
            <img src={AfricaViewMockUp} alt='' className='worksImg' />
            <img src={TPOICwebsite} alt='' className='worksImg' />
            <img src={ChatApp} alt='' className='worksImg' />
            <img src={PercentCalc} alt='' className='worksImg' />
            <img src={PortfolioJS} alt='' className='worksImg' />
        </div>
        <button type='button' className='worksBtn'>See More</button>
        <hr></hr>
    </section>
  )
}

export default Works