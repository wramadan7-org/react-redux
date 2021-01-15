import React, { Component } from 'react'
// import { connect } from 'react-redux'
import {
    Container, Col, Form, FormGroup,
    Input, Label, Button
} from 'reactstrap'
import imgLogo from '../assets/images/Logo.png'
import profileLogo from '../assets/images/profil.png'
import profileAction from '../redux/actions/profile'
import { connect } from 'react-redux'
import moment from 'moment'

class FormProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.profile.dataProfile.name,
            email: this.props.profile.dataProfile.email,
            phone: this.props.profile.dataProfile.phone,
            birthdate: moment(this.props.profile.dataProfile.date).format('YYYY-MM-DD'),
            image: this.props.profile.dataProfile.image,
            // password: this.props.profile.dataProfile.password,
            gender: this.props.profile.dataProfile.gender,
            selectFile: null,
            selectImg: null,
        }

        // this.onImageChange = this.onImageChange.bind(this)
        // console.log('props', props)
    }
    onChangeText = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log({ [e.target.name]: e.target.value })
    }

    onChangeRadio = (e) => {
        this.setState({ gender: e.target.value })
        // console.log({ gender: e.target.value })
    }

//    componentDidUpdate(prevProps, prevState) {
//        console.log('form PrevPorps', prevProps)
//        console.log('form prevSatte', prevState)
//    }

   onImageChange = event => {
       console.log('target', event.target.files[0])
       const reader = new FileReader();
       reader.onload = () => {
           if (reader.readyState === 2) {
                this.setState({
                    selectFile: reader.result
                })
           }
       }
       reader.readAsDataURL(event.target.files[0])
       this.setState({
           selectImg: event.target.files[0],
           loaded: 0
       })
   }

   submit = async (values) => {
       
       if (this.state.selectFile === null) {
           const { name, email, phone, birthdate, gender } = values
           const data = {
               name, email, phone, birthdate, gender
           }
           // console.log('data',data)
           await this.props.updateProfile(this.props.auth.token, data)
           // console.log('ahahahah',this.props.updateProfile(this.props.auth.token, data))
           await this.props.getProfile(this.props.auth.token)
       } else {
           const { name, email, phone, birthdate, gender } = values
           const data = new FormData()
           data.append('name', name)
           data.append('email', email)
           data.append('phone', phone)
           data.append('birthdate', birthdate)
           data.append('gender', gender)
           data.append('photo', this.state.selectImg)
           await this.props.updateProfileWithPhoto(this.props.auth.token, data)
           await this.props.getProfile(this.props.auth.token)
       }

   }
    render() {
        console.log('state', this.state.selectImg)
        // console.log('ppp', new File())
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
                            <Form onSubmit={() => this.submit(this.state)}>
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
                                        <Input onChange={this.onChangeText} name="birthdate" type="text" className="" value={this.state.birthdate} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}></Label>
                                    <Col sm={7}>
                                        <Button  type="submit" className="rounded-pill" style={{backgroundColor: '#DB3022', width: 100, height: 36}}>Save</Button>
                                    </Col>
                                </FormGroup>
                            </Form>

                        </Col>
                        <div className="border-left" style={{height: 166}}>
                            <div className="ml-3">
                                <div style={{width: 166, height: 111}}>
                                    <img 
                                        className="rounded-circle align-items-center justify-content-center"
                                        src={this.state.selectFile !== null 
                                                ? this.state.selectFile
                                                : this.state.image?.length > 0
                                                    ? `${process.env.REACT_APP_BACKEND_URL}${this.state.image}`
                                                    : profileLogo
                                        }
                                        style={{width: 110, height: 110}}
                                    />
                                </div>
                                <div>
                                    <Label className="">
                                        <Input name="photo" type="file" accept="image/jpg, image/png" onChange={this.onImageChange} />
                                    </Label>
                                </div>
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
    profile: state.profile,
})

const mapDispatchToProps = {
    getProfile: profileAction.getProfile,
    updateProfile: profileAction.updateProfile,
    updateProfileWithPhoto: profileAction.updatePhotoProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormProfile)