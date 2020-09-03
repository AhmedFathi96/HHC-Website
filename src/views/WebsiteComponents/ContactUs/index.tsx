
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// react plugin used to create google maps

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class ContactUs extends React.Component {
  state = {
    firstNameContact1Focus:"",
    lastNameContact1Focus:"",
    emailContact1Focus:"",
    firstNameContact2Focus:'',
    emailContact2Focus:'',
    firstNameContact4Focus:'',
    emailContact4Focus:'',
    lastNameContact4Focus:''

  };
  render() {
    return (
      <>
        <div className="cd-section" id="contactus">
          {/* ********* CONTACT US 1 ********* */}
          <div
            className="contactus-1 section-image"
            style={{
              backgroundImage: "url(" + require("../../../assets/img/contact1.jpg") + ")"
            }}
          >
            <Container>
              <Row>
                <Col md="5">
                  <h2 className="title">Get in Touch</h2>
                  <h4 className="description">
                    You need more information? Check what other persons are
                    saying about our product. They are very happy with their
                    purchase.
                  </h4>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us at the office</h4>
                      <p className="description">
                        Bld Mihail Kogalniceanu, nr. 8, <br />
                        7652 Bucharest, <br />
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p className="description">
                        Michael Jordan <br />
                        +40 762 321 762 <br />
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <Card className="card-contact card-raised">
                    <Form id="contact-form-2" method="post" role="form">
                      <CardHeader className="text-center">
                        <CardTitle tag="h4">Contact Us</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col md="6">
                            <label>First name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": this.state
                                  .firstNameContact1Focus
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-single-02" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="First Name..."
                                placeholder="First Name..."
                                type="text"
                                onFocus={e =>
                                  this.setState({
                                    firstNameContact1Focus: true
                                  })
                                }
                                onBlur={e =>
                                  this.setState({
                                    firstNameContact1Focus: false
                                  })
                                }
                              />
                            </InputGroup>
                          </Col>
                          <Col className="pl-2" md="6">
                            <FormGroup>
                              <label>Last name</label>
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": this.state
                                    .lastNameContact1Focus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-caps-small" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  aria-label="Last Name..."
                                  placeholder="Last Name..."
                                  type="text"
                                  onFocus={e =>
                                    this.setState({
                                      lastNameContact1Focus: true
                                    })
                                  }
                                  onBlur={e =>
                                    this.setState({
                                      lastNameContact1Focus: false
                                    })
                                  }
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                          <label>Email address</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailContact1Focus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email Here..."
                              type="text"
                              onFocus={e =>
                                this.setState({ emailContact1Focus: true })
                              }
                              onBlur={e =>
                                this.setState({ emailContact1Focus: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <label>Your message</label>
                          <Input
                            id="message-2"
                            name="message"
                            rows="6"
                            type="textarea"
                          />
                        </FormGroup>
                        <Row>
                          <Col md="6">
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                                I'm not a robot
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <Button
                              className="btn-round pull-right fat-btn"
                            >
                              Send Message
                            </Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END CONTACT US 1 ********* */}
    
        </div>{" "}
      </>
    );
  }
}

export default ContactUs;





















// import React from "react";
// // nodejs library that concatenates classes
// import classnames from "classnames";
// // react plugin used to create google maps
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";

// // reactstrap components
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   Label,
//   FormGroup,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Row,
//   Col
// } from "reactstrap";

// // core components
// const ContactUsMap:any = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap
//       defaultZoom={15}
//       defaultCenter={{ lat: 30.028851, lng: 31.010911}}
//       defaultOptions={{
//         scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    
//       }}
//     >
//       <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
//     </GoogleMap>
//   ))
// );

// class ContactUs extends React.Component {
//   state = {
//     firstNameContact1Focus:"",
//     lastNameContact1Focus:"",
//     emailContact1Focus:"",
//     firstNameContact2Focus:'',
//     emailContact2Focus:'',
//     firstNameContact4Focus:'',
//     lastNameContact4Focus:'',
//     emailContact4Focus:''

//   };
//   render() {
//     return (
//       <>
//         <div className="cd-section" id="contactus">

//           {/* ********* CONTACT US 4 ********* */}
//           <div className="contactus-4">
//             <ContactUsMap
//               googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPjx0oKONYj0Dnu4e1ENh0O_nEug88qXM"
//               loadingElement={<div style={{ height: `100%` }} />}
//               containerElement={<div className="map" />}
//               mapElement={<div style={{ height: `100%` }} />}
//             />
//             <Container>
//               <Row>
//                 <Col md="5" style={{opacity: '0'}}>
//                   <h1 className="title">Get in Touch</h1>
//                   {/* <h4 className="description text-white">
//                     Do you need more information? Please contact us to find more
//                     about our products and services.
//                   </h4> */}
//                 </Col>
//                 <Col className="m-auto" md="12">
//                   <Card className="card-contact card-raised">
//                     <Row>
//                       <Col md="8">
//                         <Form
//                           className="p-3"
//                           id="contact-form-4"
//                           method="post"
//                           role="form"
//                         >
//                           <CardHeader>
//                             <CardTitle tag="h4">Get in Touch</CardTitle>
//                           </CardHeader>
//                           <CardBody>
//                             <Row>
//                               <Col md="6">
//                                 <label>First name</label>
//                                 <InputGroup
//                                   className={classnames({
//                                     "input-group-focus": this.state
//                                       .firstNameContact4Focus
//                                   })}
//                                 >
//                                   <InputGroupAddon addonType="prepend">
//                                     <InputGroupText>
//                                       <i className="tim-icons icon-single-02" />
//                                     </InputGroupText>
//                                   </InputGroupAddon>
//                                   <Input
//                                     aria-label="First Name..."
//                                     placeholder="First Name..."
//                                     type="text"
//                                     onFocus={e =>
//                                       this.setState({
//                                         firstNameContact4Focus: true
//                                       })
//                                     }
//                                     onBlur={e =>
//                                       this.setState({
//                                         firstNameContact4Focus: false
//                                       })
//                                     }
//                                   />
//                                 </InputGroup>
//                               </Col>
//                               <Col md="6">
//                                 <FormGroup>
//                                   <label>Last name</label>
//                                   <InputGroup
//                                     className={classnames({
//                                       "input-group-focus": this.state
//                                         .lastNameContact4Focus
//                                     })}
//                                   >
//                                     <InputGroupAddon addonType="prepend">
//                                       <InputGroupText>
//                                         <i className="tim-icons icon-caps-small" />
//                                       </InputGroupText>
//                                     </InputGroupAddon>
//                                     <Input
//                                       aria-label="Last Name..."
//                                       placeholder="Last Name..."
//                                       type="text"
//                                       onFocus={e =>
//                                         this.setState({
//                                           lastNameContact4Focus: true
//                                         })
//                                       }
//                                       onBlur={e =>
//                                         this.setState({
//                                           lastNameContact4Focus: false
//                                         })
//                                       }
//                                     />
//                                   </InputGroup>
//                                 </FormGroup>
//                               </Col>
//                             </Row>
//                             <FormGroup>
//                               <label>Email address</label>
//                               <InputGroup
//                                 className={classnames({
//                                   "input-group-focus": this.state
//                                     .emailContact4Focus
//                                 })}
//                               >
//                                 <InputGroupAddon addonType="prepend">
//                                   <InputGroupText>
//                                     <i className="tim-icons icon-email-85" />
//                                   </InputGroupText>
//                                 </InputGroupAddon>
//                                 <Input
//                                   placeholder="Email Here..."
//                                   type="text"
//                                   onFocus={e =>
//                                     this.setState({ emailContact4Focus: true })
//                                   }
//                                   onBlur={e =>
//                                     this.setState({ emailContact4Focus: false })
//                                   }
//                                 />
//                               </InputGroup>
//                             </FormGroup>
//                             <FormGroup>
//                               <label>Your message</label>
//                               <Input
//                                 id="message-3"
//                                 name="message"
//                                 rows="6"
//                                 type="textarea"
//                               />
//                             </FormGroup>
//                             <Row>
//                               <Col md="6">
//                                 <FormGroup check>
//                                   <Label check>
//                                     <Input type="checkbox" />
//                                     <span className="form-check-sign" />
//                                     I'm not a robot
//                                   </Label>
//                                 </FormGroup>
//                               </Col>
//                               <Col md="6">
//                                 <Button
//                                   className="btn-round pull-right"
//                                   color="primary"
//                                 >
//                                   Send Message
//                                 </Button>
//                               </Col>
//                             </Row>
//                           </CardBody>
//                         </Form>
//                       </Col>
//                       <Col md="4">
//                         <div className="info text-left bg-info">
//                           <CardTitle tag="h4">Contact information</CardTitle>
//                           <div className="info info-horizontal mt-5">
//                             <div className="icon">
//                               <i className="tim-icons icon-square-pin" />
//                             </div>
//                             <div className="description">
//                               <h5 className="info-title">
//                                 345 Street 2 <br />
//                                 Creative Tim Tour
//                               </h5>
//                             </div>
//                           </div>
//                           <div className="info info-horizontal">
//                             <div className="icon">
//                               <i className="tim-icons icon-mobile" />
//                             </div>
//                             <div className="description">
//                               <h5 className="info-title">+16(3412) 421 241</h5>
//                             </div>
//                           </div>
//                           <div className="info info-horizontal">
//                             <div className="icon">
//                               <i className="tim-icons icon-email-85" />
//                             </div>
//                             <div className="description">
//                               <h5 className="info-title">
//                                 contact@yourwebsite.com
//                               </h5>
//                             </div>
//                           </div>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//           {/* ********* END CONTACT US 4 ********* */}
//         </div>{" "}
//       </>
//     );
//   }
// }

// export default ContactUs;
