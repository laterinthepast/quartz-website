import React from 'react'
import image2 from '../images/background/5.jpg'

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-text">
                <p>Since 1991 the company has provided chemical analysis and consultancy to the construction industry. In 1995 UKAS accreditation was gained. Since initial accreditation the scope of Quartz's has grown and now includes tests for aggregates, paint, gypsum plasters and water for concrete for example .</p>
                <p><br/>
                    Technological advances in the industry and the requirement during restoration of historical buildings to use identical materials continue to make demands on the analysis of samples and the interpretation of results. Quartz Scientific has the depth of knowledge and experience to keep pace with changes as they occur.</p>
            </div>
            <div className="about-image">
                <img src={image2} alt="" />
            </div>



        </div>
    )
}

export default About
