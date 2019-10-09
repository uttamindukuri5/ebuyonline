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
    DropdownItem } from 'reactstrap';

const headerComponent = ( props ) => {

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
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">
                                <FontAwesomeIcon icon={faShoppingCart} size='2x' color='white'/>
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret >
                                <FontAwesomeIcon icon={faUserCircle} size='2x' color='white'/>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Account Profile
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
};

export default headerComponent;