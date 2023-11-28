import React, { Component } from 'react'
import { Divider, Input, Card, Row, Col, Select } from "antd"

export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      fatherName: "",
      password: "",
      confirmPassword: "",
      mobileNo:"",
      genderList:[
        {
          id:1,
          value:"Male",
        },
        {
          id:2,
          value:"Female"
        },
      ],
      genderIdSelectedOption:null
    }

  }
  textChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  dropDownChange = (selected,obj,event) =>{
    console.log(selected,obj,event)
    this.setState({
      genderIdSelectedOption: obj
    })
  }
 
  render() {
    const {
      firstName,
      lastName,
      email,
      dateOfBirth,
      fatherName,
      password,
      confirmPassword,
      mobileNo,
      genderList,
      genderIdSelectedOption
    } = this.state
    return (
      <>
        <Divider className='Main-Div' orientation="middle">
          <Card className='SignUp-Card' sm={3}>
            <h1>Sign Up</h1>
            <Row className='Row-Div'>
              <Col span="11" className='Col-Div' >
                <label><b>First Name:</b></label>
                <Input value={firstName} name='firstName' onChange={this.textChange}></Input>
              </Col>
              <Col span="11" className='Col-Div' >
                <label><b>Last Name:</b></label>
                <Input value={lastName} name='lastName' onChange={this.textChange}></Input>
              </Col>
              <Col span="11" className='Col-Div' >
                <label><b>Father Name:</b></label>
                <Input value={fatherName} name='fatherName' onChange={this.textChange}></Input>
              </Col>
              <Col span="11" className='Col-Div' >
                <label><b>DOB:</b></label>
                <Input value={dateOfBirth} name='dateOfBirth' type='date' onChange={(e,obj)=> this.textChange(e,obj)}></Input>
              </Col>
              <Col span="11" className='Col-Div' >
                <label><b>Email:</b></label>
                <Input value={email} name='email' type='email' onChange={this.textChange}></Input>
              </Col>
              <Col span="11" className='Col-Div' >
                <label><b>Password:</b></label>
                <Input value={password} name='password' type='password' onChange={this.textChange}></Input>
              </Col>
              <Col span="11" className='Col-Div' >
                <label><b>Confirm Password:</b></label>
                <Input value={confirmPassword} name='confirmPassword' type='password' onChange={this.textChange}></Input>
              </Col>
              <Col span="11" className='Col-Div' >
                <label><b>Mobile:</b></label>
                <Input value={mobileNo} name='mobileNo' onChange={this.textChange}></Input>
              </Col>
              <Col span="11" className='Col-Div' >
                <label><b>Gender:</b></label>
                <Select value={genderIdSelectedOption} name='genderId'  options={genderList} onChange={this.dropDownChange}></Select>
              </Col>
            </Row>
          </Card>
        </Divider>
      </>
    )
  }
}

export default SignUp
