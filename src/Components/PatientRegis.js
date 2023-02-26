import React, { Component } from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
    { value: "Option 5", label: "Option 5" },
    { value: "Option 6", label: "Option 6" },
    { value: "Option 7", label: "Option 7" },
    { value: "Option 8", label: "Option 8" },
    { value: "Option 9", label: "Option 9" },
    { value: "Option 10", label: "Option 10" },
  ];

export class PatientRegis extends Component {

  constructor() {
    super();
    this.state = {
      formData: {},
      errors:{},
      defaultValue: {
        docId: "",
        dob: "",
        gender: "",
        city: "",
        adhaar: "",
        height: "",
        weight: "",
        bloodGroup: "",
        profilePic: null
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

//   validate()
//   {

//     let formData = this.state.formData;
//     let errors = {};
//     let isValid = true;

//     if(!formData["fname"]){

//       isValid = false;
//       errors["fname"] = "please enter first name"
//     }

    
//     if(!formData["lname"]){

//       isValid = false;
//       errors["lname"] = "please enter last name"
//     }

//     if(!formData["email"]){

//       isValid = false;
//       errors["email"] = "please enter email address"
//     }

//     if (typeof formData["email"] !== "undefined") {
          
//       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//       if (!pattern.test(formData["email"])) {
//         isValid = false;
//         errors["email"] = "Please enter valid email address.";
//       }
//     }

    
//     if (!formData["password"]) {
//       isValid = false;
//       errors["pass"] = "Please enter your password.";
//     }

//     if (!formData["cpassword"]) {
//       isValid = false;
//       errors["cpass"] = "Please enter your confirm password.";
//     }

//     if (typeof formData["password"] !== "undefined") {
//       if(formData["pass"].length < 6){
//           isValid = false;
//           errors["pass"] = "Please add at least 6 charachter.";
//       }
//     }

//     if (typeof formData["cpassword"] !== "undefined" && typeof formData["cpass"] !== "undefined") {
        
//       if (formData["pass"] != formData["cpassword"]) {
//         isValid = false;
//         errors["cpassword"] = "Passwords don't match.";
//       }
//     }


//     this.setState({
//       errors: errors
//     });

//     return isValid;
//   }

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
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Patient Registration</h2>
                  <div className="mb-3">
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group className="mb-3" controlId="docId">
                        <Form.Label className="text-center">
                          UserId
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter UserId"  name ="docId"  value={this.state.formData.docId}
                  onChange={this.handleChange}/>
                      </Form.Group>
                         <div className="text-danger">{this.state.errors.docId}</div>
                      
                       <Form.Group className="mb-3" controlId="dob">
                        <Form.Label className="text-center">
                          Date of Birth
                        </Form.Label>
                        <Form.Control type="date" placeholder="Select Dob" name = "dob" value={this.state.formData.dob}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.dob}</div>

                      <Form.Group className="mb-3" controlId="gender">
                        <Form.Label className="text-center">
                          Gender
                        </Form.Label>
                        <Form.Control  as="select" name ="gender" value={this.state.formData.gender}
                  onChange={this.handleChange} >
                      <option value="">--Select--</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="other">Other</option>
                  </Form.Control>
                    
                  
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.gender}</div>


                      <Form.Group className="mb-3" controlId="city">
                        <Form.Label className="text-center">
                          City
                        </Form.Label>
                        
                        <Form.Control type="text" placeholder="Enter City" name ="city" value={this.state.formData.city}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.city}</div>


                      <Form.Group className="mb-3" controlId="adhaar">
                        <Form.Label className="text-center">
                          Adhaar
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Adhaar Number" name ="adhaar" value={this.state.formData.adhaar}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.adhaar}</div>


                      <Form.Group className="mb-3" controlId="weight">
                        <Form.Label className="text-center">
                          Weight
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Weight" name ="weight" value={this.state.formData.weight}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.weight}</div>


                      <Form.Group className="mb-3" controlId="height">
                        <Form.Label className="text-center">
                          Height
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Height" name ="height" value={this.state.formData.height}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.height}</div>




                      <Form.Group className="mb-3" controlId="bloodGroup">
                        <Form.Label className="text-center">
                          Blood Group
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Blood Group" name ="bloodGroup" value={this.state.formData.bloodGroup}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.bloodGroup}</div>

                      <Form.Group className="mb-3" controlId="profilePic">
                        <Form.Label className="text-center">
                          Profile Picture
                        </Form.Label>
                        <Form.Control type="file" placeholder="Select Profile Picture" name="profilePic" value={this.state.formData.profilePic}
                  onChange={this.handleChange} />
                      </Form.Group>
                      <div className="text-danger">{this.state.errors.profilePic}</div>

                     
                     
                    
                      
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Add Details
                        </Button>
                      </div>
                    </Form>
                    
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
