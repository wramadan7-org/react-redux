import React, { Component } from 'react'
import {
    Container,
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    Input, Button
} from 'reactstrap'

import iconSearch from '../assets/images/Search.png'
import iconFilter from '../assets/images/iconFilter.png'
import iconCart from '../assets/images/cart.png'
import { Link } from 'react-router-dom'
import Style from '../assets/style.css'

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
                                    <img className="iconSearch " src={iconSearch} />
                                    {/* <InputGroup className="group">
                                    <Input placeholder="Search" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText><img src={iconSearch} /></InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup> */}
                                </NavItem>
                                <NavItem>
                                    <NavLink><Button color="light"><img src={iconFilter} /></Button></NavLink>
                                </NavItem>
                            </div>

                            <div className="d-flex align-items-center w-25 justify-content-between">
                                <NavItem>
                                    <NavLink><img src={iconCart} /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button className="rounded-pill">Login</Button>
                                </NavItem>
                                <NavItem>
                                    <Button className="rounded-pill">Signup</Button>
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
