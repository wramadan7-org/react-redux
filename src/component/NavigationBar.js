import React, { Component } from 'react'
import {
    Container,
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    Input, Button
} from 'reactstrap'

import iconSearch from '../assets/images/Search.png'
import iconFilter from '../assets/images/iconFilter.png'
import iconCart from '../assets/images/cart.png'
import { Link } from 'react-router-dom'

class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarOpen: false
        }
    }
    render() {
        return (
            <Navbar color="light" light className="shadow" expand="md">
                <Container>
                    <Link to={"/public"}>
                        <NavbarBrand>
                            <h1>Brand</h1>
                        </NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })} />
                    <Collapse isOpen={this.state.navbarOpen} navbar>
                        <Nav className="mr-auto align-items-center w-100" navbar>
                            <div className="d-flex align-items-center w-75">
                                <NavItem className="search w-100">
                                    <Input placeholder="Search" className="rounded-pill" />
                                    <img className="iconSearch " src={iconSearch} alt="img" />
                                    {/* <InputGroup className="group">
                                    <Input placeholder="Search" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText><img src={iconSearch} alt="img" /></InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup> */}
                                </NavItem>
                                <NavItem>
                                    <Button color="light"><img src={iconFilter} alt="img" /></Button>
                                </NavItem>
                            </div>

                            <div className="d-flex align-items-center w-25 justify-content-between">
                                <NavItem>
                                    <Link to="/cart">
                                        <img src={iconCart} alt="img" />
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/login">
                                        <Button className="rounded-pill">Login</Button>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/signup">
                                        <Button className="rounded-pill">Signup</Button>
                                    </Link>
                                </NavItem>
                            </div>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar
