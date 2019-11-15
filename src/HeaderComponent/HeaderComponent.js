import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Col
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const headerComponent = ( props ) => {
    const searchStyle = {
        width: "100%"
    };
    return(
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="http://localhost:3000/">
                    <img
                        src="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg?fbclid=IwAR0Js3L52YZdrGYjSnAMFEn9tRk2hKjXzZyfiqQkP1-oHqsG12ilRPGdVb8"
                        width="100"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </NavbarBrand>
                <NavbarToggler/>
                <Collapse navbar>
                    <Col style={searchStyle} xs={10}>
                        <input style={searchStyle} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    </Col>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="CartPage">
                                <FontAwesomeIcon icon={faShoppingCart} size='2x' color='white'/>
                            </NavLink>
                        </NavItem>                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret >
                            <FontAwesomeIcon icon={faUserCircle} size='2x' color='white'/>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <a href="LoginPage">
                                <DropdownItem>
                                    Sign in
                                </DropdownItem>
                            </a>
                            <DropdownItem divider />
                            <a href="HomePage">
                                <DropdownItem>
                                    Log Out
                                </DropdownItem>
                            </a>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
};

export default headerComponent;