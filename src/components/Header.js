import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import "../../src/App.css";

const Header = () => {
    return (
        <>
            <Navbar className="custom-navbar" variant="dark">
                <Container className="justify-content-center">
                    <NavLink to="/" className="text-decoration-none text-light mx-2 mb-4 gap-5">Sign up</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/company-info" className="text-decoration-none text-light mb-4 " >Company info</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header