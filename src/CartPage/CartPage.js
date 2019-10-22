import React from 'react';
import {
    Button,
    Form, FormGroup,
    Label, Input, Card, CardBody, Container, Row
} from 'reactstrap';

const CartPage = (props) => {
    const cardStyle = {
        width: "30%",
        padding: "10px",
        margin: "auto"
    };
    const bodyStyle = {
        padding: "50px",
        display: "top"
    };
    return (
        <div className="App">
            <Container fluid={true} style={bodyStyle}>
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

export default CartPage;