import React from 'react'
import img1 from '../images/er.jpg'
import img2 from '../images/et.jpg'
import img3 from '../images/ey.jpg'
import img4 from '../images/eu.jpg'

const Services = () => {
    return (
        <div className="services-wrapper">
            <div className="services-container">
                <div className="services-item">
                    <h1>Chemical Analysis</h1>
                    <div className="services-insert">
                        <img src={img1} alt=""/>
                        <p>Analysis of a range of construction materials to British, European and American standards. Unusual procedures can be accommodated from supplied documentation or our own extensive library.</p>
                    </div>
                </div>
                <div className="services-item">
                    <h1>Physical testing</h1>
                    <div className="services-insert">
                        <img src={img2} alt=""/>
                        <p>Physical testing of a range of construction materials to British, European and American standards.</p>
                    </div>
                </div>
                
                <div className="services-item">
                    <h1>Site survey</h1>
                    <div className="services-insert">
                        <img src={img3} alt=""/>
                        <p>Sites can be surveyed, in co-operation with trusted companies, for safety, prospective purchase or investigation of structural condition.</p>
                    </div>
                </div>
                <div className="services-item">
                    <h1>Expert witness</h1>
                    <div className="services-insert">
                        <img src={img4} alt=""/>
                        <p>Mrs Iren Jasko MSc EurChem CSci CChem FRSC is available to act in an expert witness capacity to help resolve disputes and in formal civil and criminal legal proceedings</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Services
