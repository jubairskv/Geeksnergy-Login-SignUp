import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar className="custom-navbar" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">Sign up</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/company-info" className="text-decoration-none text-light" >Company Info</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header