import React from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {Col, Button, Badge, Form, FormGroup, Label, Input, FormText, Container, Card, CardBody} from 'reactstrap';

const SignUpPage = (props) => {
    return (
        <Container>
            <Form>
                <h1>Sign Up <Badge color="secondary"></Badge></h1>
                <Card>
                    <CardBody>
                        <AvForm>
                            <AvField name="name" label="Enter Full Name" type="text" errorMessage="Invalid name"
                                     placeholder="Enter Full Name" validate={{
                                required: {value: true},
                                pattern: {value: '^[A-Za-z0-9]+$'},
                                minLength: {value: 1},
                                maxLength: {value: 30}
                            }}/>
                        </AvForm>
                        <AvForm>
                            <AvField name="email" label="Email" type="email" placeholder="Enter Email ID"/>
                        </AvForm>
                        <AvForm>
                            <AvField name="originalPassword" label="Enter Password" type="password"
                                     placeholder="Enter Password with 6 to 15 Characters" validate={{
                                required: {value: true},
                                pattern: {value: '^[A-Za-z0-9]+$'},
                                minLength: {value: 6},
                                maxLength: {value: 15}
                            }}/>
                            <AvField name="confirmationPassword" label="Re-enter Password" type="password"
                                     placeholder="Re-enter the Password"
                                     validate={{match: {value: 'originalPassword'}}}/>
                        </AvForm>
                        <AvForm>
                            <AvField name="dateRange" label="Date of Birth" type="date" validate={{
                                dateRange: {
                                    start: {value: -5, units: 'years',},
                                    end: {value: 5, units: 'years',}
                                }
                            }}/>
                        </AvForm>
                        <AvForm>
                            <AvField name="telephone" label="Phone" type="tel" placeholder="Enter Phone Number"/>
                        </AvForm>
                        <AvForm>
                            <AvField name="cardNumber" label="Card Number" type="number" placeholder="Enter Card Number"
                                     minLength="16" maxLength="16"/>
                        </AvForm>
                        <FormGroup row>
                            <Col sm={{size: 10, offset: 1}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" id="checkbox2"/>{' '}
                                        Accept Terms and Conditions
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{size: 20, offset: 0.5}}>
                                <Button>Submit</Button>
                            </Col>
                        </FormGroup>
                    </CardBody>
                </Card>
            </Form>
        </Container>
    );

};


export default SignUpPage;