import React, { useReducer } from 'react'
import { Divider, Input, Card, Row, Col, Checkbox, Button, Tabs,Form} from "antd"
import { Link } from 'react-router-dom';
import "./Login.scss"
import 'antd/dist/reset.css';
import { useForm, Controller, SubmitHandler } from "react-hook-form"

const Login = () => {
  const [state, setState] = useReducer((oldState, newState) => ({ ...oldState, ...newState }), {
    email: "",
    password: "",
    loginType: [
      { key: "College", label: "College" },
      { key: "Student", label: "Student" },
      { key: "Company", label: "Company" },
    ],
    emailType: "College"
  })

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false

    }
  })
  const onTabClick = (key) => {
    setState({
      emailType: key,
      email: "",
      password: ""
    })
    reset();
  }

  const onSubmit = (e) => {
    console.log(e,"event")
  }
  return (
    <>
      <Divider className='Main-Div' orientation="middle">
        <Card className='Login-Card' sm={3}>
          <h1>Sign In</h1>
          <Tabs defaultActiveKey="college" items={state.loginType} onChange={onTabClick}></Tabs>
          <Form>
            <Row className='Row-Div'>
              <Col className='Col-Div' >
                <label><b>{state.emailType + " " + "Email:"} </b></label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <Input {...register('email')} {...field}/>}
                />
              </Col>
              <Col className='Col-Div'>
                <label><b>Password:</b></label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => <Input {...register('password')} type="password" {...field} ></Input>}
                />
              </Col>
              <Col className='CheckBox-align'>
                <Controller
                  name="rememberMe"
                  control={control}
                  render={({ field }) => <Checkbox  {...register("rememberMe")} {...field} />}
                />
                <label><b>Remember me</b></label>
              </Col>
              <Col className='Button-align'>
                <Button type="primary" size='large' className='Button-Size' shape='square' onClick={handleSubmit(onSubmit)}> Sign In</Button>
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
          </Form>
        </Card>
      </Divider>
    </>
  )
}

export default Login