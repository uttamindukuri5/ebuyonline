import React from 'react';
import {Row, Col,
    Button,
    Container,
    Card, CardText, CardTitle, CardBody} from 'reactstrap';

const HomePage = (props) => {
    const bodyStyle = {
        padding: "20px 17.5% 20px 17.5%"
    }
    const cardStyle = {
        marginBottom: "10px",
        marginLeft: "-20px"
    }

    let store_col_1 = [];
    for(let i = 0; i < props.items.length; i++) {
        if(i % 4 === 0) {
            store_col_1.push(
                <Card style={cardStyle}>
                    <img src={props.items[i][0]} className='card-img-top'/>
                    <CardBody>
                        <CardTitle>Sloth for sale!</CardTitle>
                        <CardText>This sloth costs ${props.items[i][2]}</CardText>
                        <Button href={props.items[i][0]} color="primary">Link</Button>
                    </CardBody>
                </Card>)
        }
    }
    let store_col_2 = [];
    for(let i = 0; i < props.items.length; i++) {
        if(i % 4 === 1) {
            store_col_2.push(
                <Card style={cardStyle}>
                    <img src={props.items[i][0]} className='card-img-top'/>
                    <CardBody>
                        <CardTitle>Sloth for sale!</CardTitle>
                        <CardText>This sloth costs ${props.items[i][2]}</CardText>
                        <Button href={props.items[i][0]} color="primary">Link</Button>
                    </CardBody>
                </Card>)
        }
    }
    let store_col_3 = [];
    for(let i = 0; i < props.items.length; i++) {
        if(i % 4 === 2) {
            store_col_3.push(
                <Card style={cardStyle}>
                    <img src={props.items[i][0]} className='card-img-top'/>
                    <CardBody>
                        <CardTitle>Sloth for sale!</CardTitle>
                        <CardText>This sloth costs ${props.items[i][2]}</CardText>
                        <Button href={props.items[i][0]} color="primary">Link</Button>
                    </CardBody>
                </Card>)
        }
    }
    let store_col_4 = [];
    for(let i = 0; i < props.items.length; i++) {
        if(i % 4 === 3) {
            store_col_4.push(
                <Card style={cardStyle}>
                    <img src={props.items[i][0]} className='card-img-top'/>
                    <CardBody>
                        <CardTitle>Sloth for sale!</CardTitle>
                        <CardText>This sloth costs ${props.items[i][2]}</CardText>
                        <Button href={props.items[i][0]} color="primary">Link</Button>
                    </CardBody>
                </Card>)
        }
    }

    return (
        <div className="App">
            <Container fluid={true} style={bodyStyle}>
                <Row>
                    <Col>
                        {store_col_1}
                    </Col>
                    <Col>
                        {store_col_2}
                    </Col>
                    <Col>
                        {store_col_3}
                    </Col>
                    <Col>
                        {store_col_4}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;