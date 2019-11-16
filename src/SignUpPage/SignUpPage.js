import React, {useState} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {Col, Button, Form, FormGroup, Label, Input, Container, Alert} from 'reactstrap';
import {Link} from "react-router-dom";

const encrypt = require('../Encryption/encryption');
const SignUpPage = () => {

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        DOB: '',
        phone: 0,
        cardNumber: 0,
        cvv: 0,
    });
    const [hasErrors, setErrors] = useState(false);

    const [message, setMessage] = useState({
        message: ''
    });

    let alertMessage = (
        <Alert hidden={true}>Initialize</Alert>
    );


    async function fetchData() {
        const response = await fetch("http://localhost:5000/signup",  {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        await response
            .json()
            .then(res => setMessage({'message': res.message}))
            .catch(err => setErrors(err));
        return response;
    }

    console.log(hasErrors);

    const userChangeHandler = (event) => {
        event.persist();
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user);
    };

    const submitHandler = (event) => {
        console.log("entered");
        console.log(user);
        event.preventDefault();
        let val = encrypt.passEncrypt(user.password, 5);
        user.password= val;
        console.log(user);
    };
    const { fullName, email, password, DOB, phone, cardNumber, cvv } = user;


    return (
        <Container>
            { alertMessage }
            <Form>
                <h1>Sign Up</h1>
                <AvForm>
                    <AvField name="fullName"
                             label="Enter Full Name"
                             type="text" errorMessage="Invalid name"
                             placeholder="Enter Full Name"
                             value={fullName}
                             onChange={userChangeHandler}
                             validate={{
                        required: {value: true},
                        pattern: {value: '^[A-Za-z0-9 ]+$'},
                        minLength: {value: 1},
                        maxLength: {value: 30}
                    }}/>
                </AvForm>
                <AvForm>
                    <AvField name="email"
                             label="Email"
                             type="email"
                             placeholder="Enter Email ID"
                             value={email}
                             onChange={userChangeHandler}/>
                </AvForm>
                <AvForm>
                    <AvField name="password"
                             label="Enter Password"
                             type="password"
                             placeholder="Enter Password with 6 to 15 Characters"
                             value={password}
                             onChange={userChangeHandler}
                             validate={{
                        required: {value: true},
                        pattern: {value: '^[A-Za-z0-9]+$'},
                        minLength: {value: 6},
                        maxLength: {value: 15}
                    }}/>
                    <AvField name="confirmationPassword" label="Re-enter Password" type="password"
                             placeholder="Re-enter the Password"
                             validate={{match: {value: 'password'}}}/>
                </AvForm>
                <AvForm>
                    <AvField name="DOB"
                             label="Date of Birth"
                             type="date"
                             value={DOB}
                             onChange={userChangeHandler}
                             validate={{
                        dateRange: {
                            start: {value: -100, units: 'years',},
                            end: {value: 100, units: 'years',}
                        }
                    }}/>
                </AvForm>
                <AvForm>
                    <AvField name="phone"
                             label="Phone"
                             type="tel"
                             placeholder="Enter Phone Number"
                             value={phone}
                             onChange={userChangeHandler}
                             minLength="10"
                             maxLength="13"/>
                </AvForm>
                <AvForm>
                    <AvField name="cardNumber"
                             label="Card Number"
                             type="number"
                             placeholder="Enter Card Number"
                             value={cardNumber}
                             onChange={userChangeHandler}
                             minLength="16"
                             maxLength="16"/>
                </AvForm>
                <AvForm>
                    <AvField name="cvv"
                             label="CVV Number"
                             type="number"
                             placeholder="Enter CVV Number"
                             value={cvv}
                             onChange={userChangeHandler}
                             minLength="3"
                             maxLength="3"/>
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

                        <Button onClick={submitHandler}><Link to='/HomePage'>Submit</Link></Button>

                    </Col>
                </FormGroup>
            </Form>
        </Container>
    );

};


export default SignUpPage;