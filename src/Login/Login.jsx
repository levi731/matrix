import React, { Component } from 'react'
import "./Login.scss"
import 'antd/dist/reset.css';
import {Divider , Input, Card, Row, Col, Checkbox ,Button ,Tabs} from "antd"
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        email:"",
        password:"",
        loginType:[
          {key:"College", label:"College"},
          {key:"Student", label:"Student"},
          {key:"Company", label:"Company"},
        ],
        emailType:"College"
      }
    }


    textChange = (event) =>{
      const {name , value} = event.target
      this.setState({
        [name]: value 
      })
    }
    onTabClick = (key) =>{
      this.setState({
        emailType: key
      })
    }

  render() {
    const {email,password, loginType, emailType} = this.state
    return (
      <>
        <Divider className='Main-Div' orientation="middle">
            <Card className='Login-Card' sm={3}>
            <h1>Sign In</h1>
            <Tabs defaultActiveKey="college" items={loginType} onChange={this.onTabClick}></Tabs>
                <Row className='Row-Div'>
                <Col className='Col-Div' >
                    <label><b>{emailType + " " +"Email:"} </b></label>
                <Input value={email} name='email' onChange={this.textChange}></Input>
                </Col>
                <Col className='Col-Div'>
                    <label><b>Password:</b></label>
                <Input value={password} name='password' onChange={this.textChange}></Input>
                </Col>
                <Col className='CheckBox-align'>
                <Checkbox /> <label><b>Remember me</b></label>
                </Col>
                <Col className='Button-align'>
                <Button type="primary" size='large' className='Button-Size' shape='square'> Sign In</Button>
                </Col>
                <Col className='Forgot-Password'>
                  <Col>
                  <Link to={"/signUp"}>
                  Sign Up
                  </Link>
                  </Col>
                  <Col>
                  Forgot Password?
                  </Col>  
                </Col>
                </Row>
            </Card>
        </Divider>
      </>
    )
  }
}
