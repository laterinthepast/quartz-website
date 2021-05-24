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
                        <p>Analysis of a range of construction materials to British, European and American standards. Unusual procedures can be accommodated from supplied documentation or our own extensive library.</p>
                    </div>
                </div>
                
                <div className="services-item">
                    <h1>Site survey</h1>
                    <div className="services-insert">
                        <img src={img3} alt=""/>
                        <p>Analysis of a range of construction materials to British, European and American standards. Unusual procedures can be accommodated from supplied documentation or our own extensive library.</p>
                    </div>
                </div>
                <div className="services-item">
                    <h1>Expert witness</h1>
                    <div className="services-insert">
                        <img src={img4} alt=""/>
                        <p>Analysis of a range of construction materials to British, European and American standards. Unusual procedures can be accommodated from supplied documentation or our own extensive library.</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Services
