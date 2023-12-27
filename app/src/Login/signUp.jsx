import React, { useReducer } from 'react'
import { Divider, Input, Card, Row, Col, Select, Collapse, Form, Button } from "antd"
import {FieldConstants , NamingConstants} from '../Constants/FieldConstants'
import { useForm, Controller, SubmitHandler } from "react-hook-form"
const { TextArea } = Input;
export const SignUp = () => {

  const [state, setState] = useReducer((oldState,newState)=>({...oldState,...newState}),{
    jobTypeList:FieldConstants.SignUp.jobTypeList,
    jobTypeIdSelectedOption:null
  })

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm()

   const renderfields = (type) =>{
    const fieldSet = Object.keys(FieldConstants.SignUp.renderFields[type])
    let fields = []
    fieldSet.forEach((item)=>{
      fields.push(FieldConstants.SignUp.renderFields[type][item])
    })
    fields.forEach((item)=>{
      setValue(item.name, '');
    })
    let renderfields = null;
    renderfields = fields.map((item)=>{
      switch(item.type){
        case NamingConstants.text:
          return(
            <>
            <Col span={item.fieldsize} className={item.className} >
                <label><b>{item.label}:</b></label>
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) => <Input {...register(item.name)} {...field}/>}
                />
              </Col>
            </>
            
          )
          case NamingConstants.email:
          return(
            <>
            <Col span={item.fieldsize} className={item.className} >
                <label><b>{item.label}:</b></label>
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) => <Input {...register(item.name)} type={item.type} {...field}/>}
                />
              </Col>
            </>
          )
          case NamingConstants.dropDown:
          return(
            <>
            <Col span={item.fieldsize} className={item.className}>
            <label><b>{item.label}: </b></label>
            <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) =>
                  <Select {...register(item.name)} options={item.list} {...field} />}
                />
            
            </Col>
            </>
          )
          case NamingConstants.textArea:
          return(
            <>
            <Col span={item.fieldsize} className={item.className} >
                <label><b>{item.label}:</b></label>
                <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) => <TextArea {...register(item.name)} rows={item.rows} {...field} />}
                />
              </Col>
            </>
          )
          case NamingConstants.date:
            return(
              <>
              <Col span={item.fieldsize} className={item.className} >
                  <label><b>{item.label}:</b></label>
                  <Controller
                  name={item.name}
                  control={control}
                  render={({ field }) => <Input {...register(item.name)} type={item.type} {...field}/>}
                />
                </Col>
              </>
            )
      }
    })
    setState({renderfields})
  }

  const onSubmit = (event) =>{
    console.log(event)
  }
  const dropDownChange = (selected,obj,isFromHeader) =>{
        setState({
          [obj?.name + "SelectedOption"]: obj,
        })
        reset();
        if(isFromHeader){
        renderfields(obj?.value)
        }
      }
  return (
    <>
    <Divider className='Main-Div' orientation="middle">
           <Card className='SignUp-Card' sm={3}>
             <h1>Registration</h1>
             <Col span="3">
             <label><b>Registration Type : </b></label>
             <Select 
            value={state.jobTypeIdSelectedOption}
            placeholder = "Select Sign Up Type"
            onChange={(e,obj)=>dropDownChange(e,obj,true)}
            name='signUpType'
            options={state.jobTypeList}>
            </Select></Col>
          </Card>
          <Card bordered={false} className='SignUp-Toggle-Card'>
          <Collapse accordion ghost={true} bordered={false}>
            <Form>
          <Row className='Row-Div'>
              {state.renderfields ? state.renderfields : ""}
            </Row>
            </Form>
          </Collapse>
          <Button type="primary" size='large' className='signUp-Submit' shape='square' onClick={handleSubmit(onSubmit)}> Sign Up</Button>
          </Card>
        </Divider>
    </>
  )
}

