import React, { Component } from 'react'
import {
    Col, Input, Button, Form
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import registerActions from '../redux/actions/auth'
import imgLogo from '../assets/images/Logo.png'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''

    }

    register = (e) => {
        e.preventDefault()
        const { name, email, password } = this.state
        const data = {
            name, email, password
        }
        this.props.userRegister(data)
        this.props.history.push('/login')
        // console.log('data', data)
        // console.log('props', this.props.register)
    }

    onChangeText = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="vh-100 d-flex align-items-center justify-content-center">
                <div style={{ width: 400 }} className="align-items-center">
                    <div className="text-center my-4">
                        <img src={imgLogo} style={{ height: 50 }} />
                    </div>
                    <div className="text-center my-4">
                        <h6 className="font-weight-bolder">Please login with your account</h6>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="" style={{ width: 100 }}>
                            <Button block>Customer</Button>
                        </div>
                        <div className="" style={{ width: 100 }}>
                            <Button block>Seller</Button>
                        </div>
                    </div>
                    <Form onSubmit={this.register} className="my-2">
                        <Col className="my-3">
                            <Input onChange={this.onChangeText} name='name' id='name' type='text' placeholder="Name" />
                        </Col>
                        <Col className="my-3">
                            <Input onChange={this.onChangeText} name='email' id='email' type='email' placeholder="Email" />
                        </Col>
                        <Col className="my-3">
                            <Input onChange={this.onChangeText} name='password' id='password' type='password' placeholder="Password" />
                        </Col>
                        <Col>
                            <Button block type='submit' className="rounded-pill">PRIMARY</Button>
                        </Col>
                    </Form>
                    <div className="d-flex justify-content-center my-3">
                        <p>Already have a Tokopedia account?</p>
                        <Link to="/login">
                            <p color="danger">Login</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    register: state.register
})

const mapDispatchToProps = {
    userRegister: registerActions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)