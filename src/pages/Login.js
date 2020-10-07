import React, { Component } from 'react'
import { Form, Label, Input, Button, Alert } from 'reactstrap'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        alert: ''
    }

    login = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        if (email === 'admin@mail.com' && password === 'admin') {
            this.props.login({
                id: 1,
                id_role: 1,
                isLogin: true
            }, () => {
                this.props.history.push('/', { isLogin: true })
            })
        } else {
            alert('Email or Password incorrect')
        }
    }

    onChangeText = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        // console.log(this.props.location.state.from.pathname)
        if (this.props.location.state) {
            if (this.props.location.state.from.pathname.includes('counter')) {
                this.setState({ alert: 'Login first' })
            }
        }
    }

    render() {
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div style={{ width: 400 }}>
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