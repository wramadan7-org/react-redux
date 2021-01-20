import React, { Component } from 'react'
import {
    Container,
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    Input, Button
} from 'reactstrap'
import { connect } from 'react-redux'

import iconSearch from '../assets/images/Search.png'
import iconFilter from '../assets/images/iconFilter.png'
import iconCart from '../assets/images/cart.png'
import iconBell from '../assets/images/bell.png'
import iconMail from '../assets/images/mail.png'
import iconProfile from '../assets/images/profil.png'
import { Link } from 'react-router-dom'
import profileActions from '../redux/actions/profile'
import authActions from '../redux/actions/auth'
import imgLogo from '../assets/images/Logo.png'

class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarOpen: false,
            isLogin: props.isLogin
        }
    }

    logout = (e) => {
        this.props.logout()
        // return (
        //     this.props.history.push('/login')
        // )
    }

    render() {
        const { isLogin } = this.props.auth
        {console.log('prfile',`${process.env.REACT_APP_BACKEND_URL}${this.props.profile.dataProfile.image}`)}
        return (
            <Navbar color="light" light className="shadow" expand="md">
                <Container>
                    <Link to={"/"}>
                        <NavbarBrand>
                            <img src={imgLogo} style={{ height: 50 }} />
                        </NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })} />
                    <Collapse isOpen={this.state.navbarOpen} navbar>
                        <Nav className="mr-auto align-items-start w-100" navbar>
                            <div className=" w-100 d-flex">
                                <div className="d-flex align-items-center w-75 mr-2 justify-content-center">
                                    <NavItem className="search w-75 " style={{width: 507, height: 40}}>
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
                                {isLogin === false && (
                                    <div className="d-flex align-items-center w-50 justify-content-end ">
                                        <div className=" d-flex w-75 justify-content-between">
                                            <NavItem>
                                                <Link to="/cart">
                                                    <img src={iconCart} alt="img" />
                                                </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link to="/login">
                                                    <Button className="rounded-pill" style={{backgroundColor: '#DB3022', width: 100,  height: 36, color: 'white'}}>Login</Button>
                                                </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link to="/register">
                                                    <Button className="rounded-pill" style={{backgroundColor: 'white', width: 100,  height: 36, color: 'grey'}}>Signup</Button>
                                                </Link>
                                            </NavItem>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {isLogin === true && (
                                <div className="d-flex align-items-center w-50 justify-content-start">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <NavItem>
                                            <Link to="/cart">
                                                <img src={iconCart} alt="img" />
                                            </Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="">
                                                <img src={iconBell} alt="img" />
                                            </Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="">
                                                <img src={iconMail} alt="img" />
                                            </Link>
                                        </NavItem>

                                        <NavItem>
                                            <Link to="/profile">
                                                <div style={{width: 48, height: 32}} className="align-items-center justify-content-center">
                                                    <img 
                                                        src={
                                                            this.props.profile.dataProfile.image?.length > 0
                                                            ? `${process.env.REACT_APP_BACKEND_URL}${this.props.profile.dataProfile.image}`
                                                            : iconProfile
                                                        } 
                                                        className="rounded-circle" 
                                                        alt="img" 
                                                        style={{width: 32, height: 32}}
                                                    />
                                                </div>
                                            </Link>
                                        </NavItem>
                                        <NavItem>
                                            <Button onClick={this.logout} color="danger">Logout</Button>
                                        </NavItem>
                                    </div>
                                </div>
                            )}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

const mapDispatchToProps = {
    getProfile: profileActions.getProfile,
    logout: authActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
