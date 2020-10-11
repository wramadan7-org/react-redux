import React, { Component } from 'react'
import { Form, Label, Input, Button, Alert } from 'reactstrap'
import { connect } from 'react-redux'
import auth from '../redux/actions/auth'

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
    }

    componentDidUpdate() {
        // console.log(this.props.location.state.from.pathname)
        if (this.props.auth.isLogin) {
            this.props.history.push('/profile')
        }
    }

    render() {
        const { isError, alertMsg } = this.props.auth
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div style={{ width: 400 }}>
                    <Alert color={isError ? 'danger' : 'success'} isOpen={isError || alertMsg !== ''}>{alertMsg}</Alert>
                    {this.state.alert !== '' && <Alert color='danger'>{this.state.alert}</Alert>}
                    <Form onSubmit={this.login}>
                        <Label for='email'>Email</Label>
                        <Input onChange={this.onChangeText} name='email' id='email' type='email' />
                        <Label for='password'>Password</Label>
                        <Input onChange={this.onChangeText} name='password' id='password' type='password' />
                        <Button className='mt-3' type='submit' block color='primary'>Login</Button>
                    </Form>
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