/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Row, Col, Button
} from 'reactstrap'
import NavigationBar from '../component/NavigationBar'
import imgAccount from '../assets/images/user.png'
import imgShipping from '../assets/images/map.png'
import imgOrder from '../assets/images/myorder.png'
import imgProfile from '../assets/images/profil.png'
import FormProfile from '../component/FormProfile'
import profileActions from '../redux/actions/profile'

class Profile extends Component {
  componentDidMount () {
    this.props.getProfile(this.props.auth.token)
  }

  render () {
    const { dataProfile, isLoading, isError, alertMsg } = this.props.profile
    // console.log('ok', dataProfile.name)
    return (
        <>
            <NavigationBar />
            {this.props.auth.token && !isLoading && !isError && dataProfile && (

                <Row className="">
                    <Col md="3" lg="3" className="shadow vh-100 w-100 d-flex justify-content-between">
                        <div className="my-5 w-75 ml-5">
                            <div className="d-flex align-items-center my-3 justify-content-start">
                                <div className="mr-3" style={{width: 90, height: 60}}>
                                    <img
                                        className="rounded-circle" 
                                        src={
                                            this.props.profile.dataProfile.image?.length > 0
                                                ? `${process.env.REACT_APP_BACKEND_URL}${this.props.profile.dataProfile.image}`
                                                : imgProfile
                                        }
                                        style={{width: 60, height: 60}}
                                    />
                                </div>
                                <div>
                                    <span className="font-weight-bold">{dataProfile.name}</span>
                                    <Link to="#" className="text-dark">
                                        <img /> <p style={{color: 'grey'}}>Edit Profile</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-3 justify-content-start">
                                <Button className="rounded-circle mr-3" style={{backgroundColor: '#456BF3'}}><img src={imgAccount} /></Button>
                                <Link to="/profile">
                                    <h6 className="text-dark">My Account</h6>
                                </Link>
                            </div>
                            <div className="d-flex align-items-center my-3 justify-content-start">
                                <Button className="rounded-circle mr-3" style={{backgroundColor: '#F36F45'}}><img src={imgShipping} /></Button>
                                <Link to="/profile/address">
                                    <h6 className="text-dark">Shipping Address</h6>
                                </Link>
                            </div>
                            <div className="d-flex align-items-center my-3 justify-content-start">
                                <Button className="rounded-circle mr-3" style={{backgroundColor: '#F3456F'}}><img src={imgOrder} /></Button>
                                <h6>My Order</h6>
                            </div>
                        </div>
                    </Col>
                    <Col className="shadow ml-3 mt-5 mb-5 border" lg={8} md={8} >
                        <FormProfile />
                    </Col>
                </Row>
            )}
            {isLoading && !isError && (
                <div className="vh-100 justify-content-center align-items-center">
                    <p>Loading</p>
                </div>
            )}
            {isError && alertMsg !== '' && (
                <div className="vh-100 justify-content-center align-items-center">
                    <p>{alertMsg}</p>
                </div>
            )}
        </>
    )
  }
}

// weaper pisang
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

const mapDispatchToProps = {
  getProfile: profileActions.getProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
