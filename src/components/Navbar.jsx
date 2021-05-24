import React from 'react'
import { Nav } from 'react-bootstrap'

const Navbar = () => {
    return (
        <Nav defaultActiveKey="/home" className="navbar-wrapper">
            <Nav.Link href="/home">About us</Nav.Link>
            <Nav.Link href="/home">Services</Nav.Link>
            <Nav.Link href="/home">Contact</Nav.Link>
        </Nav>
    )
}

export default Navbar
