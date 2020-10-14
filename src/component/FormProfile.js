import React, { Component } from 'react'
// import { connect } from 'react-redux'
import {
    Container, Col, Form, FormGroup,
    Input, Label, Button
} from 'reactstrap'
import imgLogo from '../assets/images/Logo.png'
import profileAction from '../redux/actions/profile'
import { connect } from 'react-redux'

class FormProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            date: '',
            image: '',
            password: ''
        }
    }

    //mengambil data dari props mengubah isi state dengan data props yg diterima kemudian dirender ulang
    //componentWillReceiveProps(props) akan dijalankan ketka menerima props baru
    componentWillReceiveProps(props) {
        this.setState({
            name: props.name,
            email: props.email,
            phone: props.phone,
            date: props.date,
            gender: props.gender,
            image: props.image,
            password: props.password
        })
        // console.log(this.state.name)
    }

    // componentDidMount() {
    //     this.props.getProfile(this.props.auth.token)
    // }

    onChangeText = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log({ [e.target.name]: e.target.value })
    }

    onChangeRadio = (e) => {
        this.setState({ gender: e.target.value })
        console.log({ gender: e.target.value })
    }

    submit = (e) => {
        e.preventDefault()
        const { name, email, phone, date, gender, password, image } = this.state
        const data = {
            name, email, phone, date, gender, image, password
        }
        this.props.updateProfile(this.props.auth.token, data)
    }

    render() {
        // const { dataProfile: user, isLoading, isError, alertMsg } = this.props.profile
        // console.log(this.state.date)
        // const date = this.state.date
        // console.log(date)
        // const day = new Date(date).getMonth
        // console.log(day)
        return (
            <div className=" w-100">
                {/* <Col className=" mt-5 mb-5 w-100"> */}
                <Container>
                    <div>
                        <h1 className="font-weight-bold">My Profile</h1>
                        <p className="text-muted">Manage your profile information</p>
                    </div>
                    <div className="border"></div>
                    <div className="d-flex my-5">
                        <Col lg={8} md={7} className="">
                            <Form onSubmit={this.submit}>
                                <FormGroup row>
                                    <Label for="forName" sm={4}>Name</Label>
                                    <Col sm={7}>
                                        <Input onChange={this.onChangeText} name="name" placeholder="Name" value={this.state.name} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="forEmail" sm={4}>Email</Label>
                                    <Col sm={7}>
                                        <Input onChange={this.onChangeText} name="email" placeholder="Email" type="email" value={this.state.email} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="">
                                    <Label for="forNumber" sm={4}>Phone number</Label>
                                    <Col sm={7} className="">
                                        <Input onChange={this.onChangeText} name="phone" placeholder="Phone" value={this.state.phone} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="forGender" sm={4}>Gender</Label>
                                    <Col sm={7} className="ml-1 d-flex">
                                        <Col sm={5}>
                                            <Input type="radio" onChange={this.onChangeRadio} name="male" value={'Male'} checked={this.state.gender === 'Male'} />{' '} Male
                                                </Col>
                                        <Col>
                                            <Input type="radio" onChange={this.onChangeRadio} name="female" value={'Female'} checked={this.state.gender === 'Female'} />{' '} Female
                                                </Col>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="">
                                    <Label for="forBirth" sm={4}>Date of birth</Label>
                                    <Col sm={7} className="d-flex">
                                        {/* <Input className="mr-2" type="select">
                                            <option>1</option>
                                            <option>2</option>
                                        </Input>
                                        <Input className="mr-2" type="select">
                                            <option>Januari</option>
                                        </Input>
                                        <Input type="select">
                                            <option>2000</option>
                                        </Input> */}
                                        <Input onChange={this.onChangeText} name="date" type="date" className="" value={this.state.date} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}></Label>
                                    <Col sm={7}>
                                        <Button type="submit" className="rounded-pill">Save</Button>
                                    </Col>
                                </FormGroup>
                            </Form>

                        </Col>
                        <div className="justify-content-center border-left h-25  w-100">
                            <div className="flex-column">
                                <img src={imgLogo} />
                                <Label className="bn btn-secndary ">
                                    <span>Select file</span>
                                    <Input type="file" accept=".jpg .png" />
                                </Label>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* </Col> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

const mapDispatchToProps = {
    getProfile: profileAction.getProfile,
    updateProfile: profileAction.putProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(FormProfile)