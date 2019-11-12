import React from 'react';
import {
    Button,
    Form, FormGroup,
    Label, Input, Card, CardBody, Container, Row
} from 'reactstrap';

const LoginPage = (props) => {
    const cardStyle = {
        width: "30%",
        padding: "10px",
        margin: "auto",
        marginBottom: "8.2%"
    };
    const bodyStyle = {
        padding: "50px",
        display: "top"
    };
    const logoStyle = {
        margin: "auto",
        width: "25%",
        height: "25%",
        marginBottom: "10px"
    };
    return (
        <div className="App">
            <Container fluid={true} style={bodyStyle}>
                <Row>
                    <img src={props.logo} style={logoStyle}/>
                </Row>
                <Row>
                    <Card style={cardStyle}>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email here" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Enter your password here" />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        </div>
    );
}

export default LoginPage;