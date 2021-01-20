import React from 'react'
import {
   Collapse,
   Navbar,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
   NavbarToggler,
   Container,
   Col,
   Button,
} from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import iconProfile from '../assets/images/profil.png'
import { useSelector, useDispatch } from 'react-redux'
import authActions from '../redux/actions/auth'

const NavigationAdmin = (props) => {
   const dispatch = useDispatch()

   const [navbarOpen, isNavbarOpen] = React.useState(false);

   const stateAccount = useSelector((state) => state.profile)

   const logout = () => {
      dispatch(authActions.logout())
   }
   console.log('navbar', stateAccount)
   return (
      <>
         <Navbar color="light" light className="shadow" expand="md" >
            <Container>
               <NavbarBrand>
                  <img src={Logo} />
               </NavbarBrand>

               <NavbarToggler className="dark" onClick={() => isNavbarOpen(!navbarOpen)} />

               <Collapse isOpen={navbarOpen} navbar>
                  <Nav className="ml-auto" navbar>
                     <NavItem>
                        <Link className="nav-link" to="/">
                           Home
                        </Link>
                     </NavItem>

                     <NavItem>
                        <Link className="nav-link" to="product">
                           Product
                        </Link>
                     </NavItem>

                     <NavItem>
                        <Link className="nav-link" to="category">
                           Category
                        </Link>
                     </NavItem>

                     <NavItem>
                        <Link to="/profile">
                           <div style={{width: 48, height: 32}} className="align-items-center justify-content-center">
                                 <img 
                                    src={
                                       stateAccount.dataProfile.image?.length > 0
                                       ? `${process.env.REACT_APP_BACKEND_URL}${stateAccount.dataProfile.image}`
                                       : iconProfile
                                    } 
                                    className="rounded-circle" 
                                    alt="img" 
                                    style={{width: 32, height: 32}}
                                 />
                           </div>
                        </Link>
                     </NavItem>

                     <NavItem className="ml-2">
                        <Button onClick={logout} color="danger" >Logout</Button>
                     </NavItem>

                  </Nav>
               </Collapse>
            </Container>
         </Navbar>
      </>
   )
}

export default NavigationAdmin;