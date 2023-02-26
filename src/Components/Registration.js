import React, { Component } from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export class Registration extends Component {

  constructor() {
    super();
    this.state = {
      formData: {},
      errors:{},
      defaultValue: {
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    if(this.validate()){
      // // const response = await saveUser(this.state.formData);
      // console.log(response.data);
      // if (response.status == 200) {
      //   this.setState({
      //     formData: { fname: "", lname: "", email: "", password: "", cpassword: "" },
      //   });

      //   this.alertMsg();
      
    }
  };

  validate()
  {

    let formData = this.state.formData;
    let errors = {};
    let isValid = true;

    if(!formData["fname"]){

      isValid = false;
      errors["fname"] = "please enter first name"
    }

    
    if(!formData["lname"]){

      isValid = false;
      errors["lname"] = "please enter last name"
    }

    if(!formData["email"]){

      isValid = false;
      errors["email"] = "please enter email address"
    }

    if (typeof formData["email"] !== "undefined") {
          
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(formData["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    
    if (!formData["password"]) {
      isValid = false;
      errors["pass"] = "Please enter your password.";
    }

    if (!formData["cpassword"]) {
      isValid = false;
      errors["cpass"] = "Please enter your confirm password.";
    }

    if (typeof formData["password"] !== "undefined") {
      if(formData["pass"].length < 6){
          isValid = false;
          errors["pass"] = "Please add at least 6 charachter.";
      }
    }

    if (typeof formData["cpassword"] !== "undefined" && typeof formData["cpass"] !== "undefined") {
        
      if (formData["pass"] != formData["cpassword"]) {
        isValid = false;
        errors["cpassword"] = "Passwords don't match.";
      }
    }


    this.setState({
      errors: errors
    });

    return isValid;
  }

  // alertMsg = () =>{

  //   Swal({
  //     title: "Success!!!",
  //     text: "Account Created Successfully",
  //     icon: "success",
  //     buttons: "OK",
  //   })
  //   .then(() => {

  //     window.location = "/";
  //   });
  // }
  

  render(){

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">UMI-Unified Medical Interface</h2>
                  <div className="mb-3">
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  name ="fname"  value={this.state.formData.fname}
                  onChange={this.handleChange}/>
                      </Form.Group>
                         <div className="text-danger">{this.state.errors.fname}</div>
                      
                       <Form.Group className="mb-3" controlId="LastName">
                        <Form.Label className="text-center">
                          Last Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" name = "lname" value={this.state.formData.lname}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.lname}</div>

                      <Form.Group className="mb-3" controlId="Mobile Number">
                        <Form.Label className="text-center">
                          Mobile Number
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile Number" name ="mobile" value={this.state.formData.mobile}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.mobile}</div>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.formData.email}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.email}</div>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.formData.password}
                  onChange={this.handleChange}/>
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.password}</div>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name ="cpassword" value={this.state.formData.cpassword}
                  onChange={this.handleChange}/>
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.cpassword}</div>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
}
