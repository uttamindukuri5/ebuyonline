import React from 'react';
import {Row,
    Button,
    Container,
    Card, CardText, CardTitle, CardBody} from 'reactstrap';

const HomePage = (props) => {
    const cardStyle = {
        width: "23%",
        padding: "5px",
        margin: "auto"
    };
    const bodyStyle = {
        margin: "center",
        padding: "5px"
    };
    return (
        <div className="App">
            <Container fluid={true}>
                <Row style={bodyStyle}>
                    <Card style={cardStyle}>
                        <img src={props.img} className='card-img-top'/>
                        <CardBody>
                            <CardTitle>Sloth for sale!</CardTitle>
                            <CardText>This sloth costs {props.price}</CardText>
                            <Button href="https://www.google.com/" color="primary">Google.com</Button>
                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <img src={props.img} className='card-img-top'/>
                        <CardBody>
                            <CardTitle>Sloth for sale!</CardTitle>
                            <CardText>This sloth costs {props.price}</CardText>
                            <Button href="https://www.google.com/" color="primary">Google.com</Button>
                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <img src={props.img} className='card-img-top'/>
                        <CardBody>
                            <CardTitle>Sloth for sale!</CardTitle>
                            <CardText>This sloth costs {props.price}</CardText>
                            <Button href="https://www.google.com/" color="primary">Google.com</Button>
                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <img src={props.img} className='card-img-top'/>
                        <CardBody>
                            <CardTitle>Sloth for sale!</CardTitle>
                            <CardText>This sloth costs {props.price}</CardText>
                            <Button href="https://www.google.com/" color="primary">Google.com</Button>
                        </CardBody>
                    </Card>
                </Row>
                <Row style={bodyStyle}>
                    <Card style={cardStyle}>
                        <img src={props.img} className='card-img-top'/>
                        <CardBody>
                            <CardTitle>Sloth for sale!</CardTitle>
                            <CardText>This sloth costs {props.price}</CardText>
                            <Button href="https://www.google.com/" color="primary">Google.com</Button>
                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <img src={props.img} className='card-img-top'/>
                        <CardBody>
                            <CardTitle>Sloth for sale!</CardTitle>
                            <CardText>This sloth costs {props.price}</CardText>
                            <Button href="https://www.google.com/" color="primary">Google.com</Button>
                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <img src={props.img} className='card-img-top'/>
                        <CardBody>
                            <CardTitle>Sloth for sale!</CardTitle>
                            <CardText>This sloth costs {props.price}</CardText>
                            <Button href="https://www.google.com/" color="primary">Google.com</Button>
                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <img src={props.img} className='card-img-top'/>
                        <CardBody>
                            <CardTitle>Sloth for sale!</CardTitle>
                            <CardText>This sloth costs {props.price}</CardText>
                            <Button href="https://www.google.com/" color="primary">Google.com</Button>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;
