import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <>
        <Navbar className="bg-success text-white" sticky="top" collapseOnSelect expand="md">
            <Container fluid className="mx-3 text-white">
                <Navbar.Brand href="#home">Tour_Maker</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="mx-auto fs-6 text-white">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Tour-Plan</Nav.Link> 
                        {user?.email ? <Nav.Link as={HashLink} to="/myOrders">My Orders</Nav.Link> : ''}
                        {user?.email ?  <Nav.Link as={HashLink} to="/adminDashboard">Admin-Dashboard</Nav.Link> : ''}
                                              
                        {
                            user?.email ? <button onClick={logOut} className="btn btn-light">Log Out</button>
                            : <Nav.Link as={HashLink} to="/login">login</Nav.Link>
                        }
                    </Nav>
                            
                    <Navbar.Text>
                       <p style={{fontSize:"12px", marginBottom:"0", color: "#fff"}}>Signed in as: <a href="#login" style={{textDecoration:"none"}}>{ user &&  user?.displayName }</a></p>
                       <p style={{fontSize:"12px", marginBottom:"0", color: "#fff"}}>Email:<a href="#login" style={{textDecoration:"none"}}>{ user &&  user?.email }</a></p>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;