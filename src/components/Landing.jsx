import React from 'react'
import logo from '../images/logo.gif'
import image1 from '../images/background/2.jpg'

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-logo">
                {/* <img src={logo} alt="" /> */}
                <h1>Quartz Scientific</h1>
            </div>
            <div className="landing-wrapper">
                <div className="landing-container-image">
                    <img src={image1} alt="" />
                </div>

                <div className="landing-container-text">
                    <h1>Chemical Analysis and Consultancy for the Construction Industry</h1>
                </div>


            </div>
        </div>

    )
}

export default Landing
