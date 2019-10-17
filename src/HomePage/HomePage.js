import React from 'react';
import {Row,
    Button,
    Container,
    Card, CardText, CardTitle, CardBody} from 'reactstrap';

const HomePage = (props) => {
    const cardStyle = {
        width: "23%",
        padding: "10px",
        margin: "auto"
    };
    const bodyStyle = {
        padding: "10px 10% 10px 10%",
        display: "top"
    };
    let store_items = []
    for(let i = 0; i < 8; i++) {
        store_items.push(
            <Card style={cardStyle}>
                 <img src={props.items[i][0]} className='card-img-top'/>
                 <CardBody>
                     <CardTitle>Sloth for sale!</CardTitle>
                     <CardText>This sloth costs ${props.items[i][1]}</CardText>
                     <Button href={props.items[i][0]} color="primary">Link</Button>
                 </CardBody>
             </Card>)

    }
    return (
        <div className="App">
            <Container fluid={true} style={bodyStyle}>
                <Row>
                    {store_items}
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;
