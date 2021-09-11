import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;
    console.log(userInfo);

    const logoutHandler = () => {
        dispatch(logout());
    }
    const dispatch = useDispatch();
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" fixed="top" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Stamp vendor</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-nabar-nav"/>
                    <Navbar.Collapse id="basic-nabar-nav">
                    <Nav className="ms-auto">
                    {userInfo ? 
                    <NavDropdown title={userInfo.name} id="username">
                        <LinkContainer to="/profile">
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item onClick={logoutHandler}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                    : 
                    <LinkContainer to="/register">
                        <Nav.Link>
                            <i className="fa fa-user"></i> Sign In
                        </Nav.Link>
                    </LinkContainer>
                    }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
