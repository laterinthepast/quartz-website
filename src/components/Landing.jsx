import React from 'react'
import image1 from '../images/background/2.jpg'
import image2 from '../images/background/5.jpg'
import img1 from '../images/er.jpg'
import img2 from '../images/et.jpg'
import img3 from '../images/ey.jpg'
import img4 from '../images/eu.jpg'
import logo from '../images/logo.gif'
import { Button, Card, Col, Container, Navbar, Row } from 'react-bootstrap'

const Landing = () => {
    return (
        <>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                </Navbar>
                <Row className="landing">
                    <Col className="landing-img hide-mobile">
                        <img src={image1} alt="" />
                    </Col>
                    <Col className="landing-text">
                        <h1>Chemical Analysis and Consultancy for the Construction Industry</h1>
                        <Button href="#contact">Contact us</Button>
                    </Col>
                </Row>
                <Row className="about" id="about">
                    <Col sm={12} className="about-text">
                        <h3>Since 1991 the company has provided chemical analysis and consultancy to the construction industry. In 1995 UKAS accreditation was gained. Since initial accreditation the scope of Quartz's has grown and now includes tests for aggregates, paint, gypsum plasters and water for concrete for example .<br />

Technological advances in the industry and the requirement during restoration of historical buildings to use identical materials continue to make demands on the analysis of samples and the interpretation of results. Quartz Scientific has the depth of knowledge and experience to keep pace with changes as they occur.</h3>

                    </Col>
                    <Col sm={12} className="about-img">
                        <img src={image2} alt="" />
                    </Col>
                </Row>

                <Row className="services">
                    <Col sm={12}>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Physical Testing</Card.Title>
                                <Card.Text>
                                    Physical testing of a range of construction materials to British, European and American standards.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Expert Witness</Card.Title>
                                <Card.Text>
                                    Mrs Iren Jasko MSc EurChem CSci CChem FRSC is available to act in an expert witness capacity to help resolve disputes and in formal civil and criminal legal proceedings.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Chemical analysis</Card.Title>
                                <Card.Text>
                                    Analysis of a range of construction materials to British, European and American standards. Unusual procedures can be accommodated from supplied documentation or our own extensive library.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>Site survey and investigation</Card.Title>
                                <Card.Text>
                                    Sites can be surveyed, in co-operation with trusted companies, for safety, prospective purchase or investigation of structural condition.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="cont">
                    <h1>Contact</h1>
                </Row>

                <Row className="contact" id="contact">
                    <Col sm={12}>


                        <p>44(0) 1923213983</p>
                        <p>iren.jasko@quartz-scientific.co.uk</p>
                        <p>ian.girling@quartz-scientific.co.uk</p>


                    </Col>
                    <Col sm={12} className="contact-column">
                        <address>
                            7G Dukes Yard<br />
                         Shakespeare Industrial Estate<br />
                        Watford<br />
                        Herts<br />
                        WD24 5AL<br />
                        </address>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Landing
