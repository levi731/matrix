import React, { Component } from 'react'
import { Divider, Input, Card, Row, Col, Select, Collapse } from "antd"
import {FieldConstants , NamingConstants} from '../Constants/FieldConstants'

const { TextArea } = Input;

export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobTypeList:FieldConstants.SignUp.jobTypeList,
      genderIdSelectedOption:null,
      renderfields:null,
      values:{},
      dropDownValues:{}
    }

  }
  textChange = (event) => {
    const { name, value } = event.target
    this.setState({
      values: {[name]:value}
    })
  }
  dropDownChange = (selected,obj,isFromHeader) =>{
    this.setState({
      [obj?.name + "SelectedOption"]: obj,
    })
    if(isFromHeader){
    this.renderfields(obj?.value)
    }
  }

  renderfields = (type) =>{
    let { values, dropDownValues } = this.state
    const fieldSet = Object.keys(FieldConstants.SignUp.renderFields[type])
    let fields = []
    fieldSet.forEach((item)=>{
      fields.push(FieldConstants.SignUp.renderFields[type][item])
      if(FieldConstants.SignUp.renderFields[type][item].type == NamingConstants.dropDown){
        this.setState({
          dropDownValues:{
            [FieldConstants.SignUp.renderFields[type][item].name + "SelectedOption"]: null
          }
        })
      }
    })
    let renderfields = null;
    renderfields = fields.map((item)=>{
      switch(item.type){
        case NamingConstants.text:
          return(
            <>
            <Col span={item.fieldsize} className={item.className} >
                <label><b>{item.label}:</b></label>
                <Input value={values[item.name]} name={item.name} type={item.type} onChange={this.textChange}></Input>
              </Col>
            </>
            
          )
          case NamingConstants.email:
          return(
            <>
            <Col span={item.fieldsize} className={item.className} >
                <label><b>{item.label}:</b></label>
                <Input value={values[item.name]} name={item.name} type={item.type} onChange={this.textChange}></Input>
              </Col>
            </>
          )
          case NamingConstants.dropDown:
          return(
            <>
            <Col span={item.fieldsize} className={item.className}>
            <label><b>{item.label}: </b></label>
            <Select 
            value={dropDownValues[item.name + "SelectedOptiom"]}
            onChange={(e,obj)=>this.dropDownChange(e,obj,false)}
            placeholder={item.placeholder}
            options={item.list} />
            </Col>
            </>
          )
          case NamingConstants.textArea:
          return(
            <>
            <Col span={item.fieldsize} className={item.className} >
                <label><b>{item.label}:</b></label>
                <TextArea value={values[item.name]} name={item.name} rows={item.rows} onChange={this.textChange}></TextArea>
              </Col>
            </>
          )
          case NamingConstants.date:
            return(
              <>
              <Col span={item.fieldsize} className={item.className} >
                  <label><b>{item.label}:</b></label>
                  <Input value={values[item.name]} name={item.name} type={item.type} onChange={this.dateChange}></Input>
                </Col>
              </>
            )
      }
    })
    this.setState({renderfields})
  }
 
  render() {
    const {
      jobTypeList,
      jobTypeIdSelectedOption,
      renderfields
    } = this.state
    return (
      <>
        <Divider className='Main-Div' orientation="middle">
          <Card className='SignUp-Card' sm={3}>
            <h1>Registration</h1>
            <Col span="3">
            <label><b>Registration Type : </b></label>
            <Select 
            value={jobTypeIdSelectedOption}
            placeholder = "Select Sign Up Type"
            onChange={(e,obj)=>this.dropDownChange(e,obj,true)}
            name='signUpType'
            options={jobTypeList}>
            </Select></Col>
          </Card>
          <Card bordered={false} className='SignUp-Toggle-Card'>
          <Collapse accordion ghost={true} bordered={false}>
          <Row className='Row-Div'>
            {renderfields ? renderfields : ""}
            </Row>
          </Collapse>
          </Card>
        </Divider>
      </>
    )
  }
}

export default SignUp
