import React, { Component } from 'react'
import {
    Form, Label, Input, Button, Alert,
    Row, Col
} from 'reactstrap'
import { connect } from 'react-redux'
import auth from '../redux/actions/auth'
import { Link } from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: '',
        alert: ''
    }

    login = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        const data = {
            email,
            password
        }
        this.props.login(data)
    }

    onChangeText = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log({ [e.target.name]: e.target.value })
    }

    componentDidUpdate() {
        // console.log(this.props.location.state.from.pathname)
        // console.log(this.props.auth)
        if (this.props.auth.token) {
            this.props.history.push('/profile')
        }
    }

    render() {
        const { isError, alertMsg } = this.props.auth
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center">
                {/* <div style={{ width: 400 }}>
                    <Alert color={isError ? 'danger' : 'success'} isOpen={isError || alertMsg !== ''}>{alertMsg}</Alert>
                    {this.state.alert !== '' && <Alert color='danger'>{this.state.alert}</Alert>}
                    <Form onSubmit={this.login}>
                        <Label for='email'>Email</Label>
                        <Input onChange={this.onChangeText} name='email' id='email' type='email' />
                        <Label for='password'>Password</Label>
                        <Input onChange={this.onChangeText} name='password' id='password' type='password' />
                        <Button className='mt-3' type='submit' block color='primary'>Login</Button>
                    </Form>
                </div> */}
                <div style={{ width: 400 }} className="align-items-center">
                    <div className="text-center my-2">
                        <h1>Belanja</h1>
                    </div>
                    <div className="text-center my-2">
                        <h6 className="font-weight-bold">Please login with your account</h6>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="" style={{ width: 100 }}>
                            <Button block>Customer</Button>
                        </div>
                        <div className="" style={{ width: 100 }}>
                            <Button block>Seller</Button>
                        </div>
                    </div>
                    <Form onSubmit={this.login} className="my-2">
                        <Col className="my-3">
                            <Input onChange={this.onChangeText} name='email' id='email' type='email' placeholder="Email" />
                        </Col>
                        <Col className="my-3">
                            <Input onChange={this.onChangeText} name='password' id='password' type='password' placeholder="Password" />
                        </Col>
                        <Col>
                            <Link>
                                <p className="text-right">Forget password?</p>
                            </Link>
                        </Col>
                        <Col>
                            <Button block type='submit' className="rounded-pill">PRIMARY</Button>
                        </Col>
                    </Form>
                    <div className="d-flex justify-content-center my-3">
                        <p>Don't have a Tokopedia account?</p>
                        <Link to="/register">
                            <p color="danger">Register</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = {
    login: auth.login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)