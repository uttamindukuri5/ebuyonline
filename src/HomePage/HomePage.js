import React from 'react';
import {Row, Col,
    Button,
    Container,
    Card, CardText, CardTitle, CardBody} from 'reactstrap';

const HomePage = (props) => {
    const cardStyle = {
        width: "23%",
        padding: "10px",
        height: "100%"
    };
    const bodyStyle = {
        padding: "10px 10% 10px 10%",
        display: "top"
    };
    const flowStyle = {
        flex: 1,
        flexDirection: "col"
    }
    let store_items = []
    for(let i = 0; i < 8; i++) {
        store_items.push(
            <Col style={flowStyle}>
                <Card style={cardStyle}>
                     <img src={props.items[i][0]} className='card-img-top'/>
                     <CardBody>
                         <CardTitle>Sloth for sale!</CardTitle>
                         <CardText>This sloth costs ${props.items[i][1]}</CardText>
                         <Button href={props.items[i][0]} color="primary">Link</Button>
                     </CardBody>
                </Card>
            </Col>)
    }
    store_items.forEach(function(item_card) {
        console.log(item_card);
    });
    return (
        <div className="App">
            <Container fluid={true} style={bodyStyle}>
                <Col>
                    {store_items}
                </Col>
            </Container>
        </div>
    );
}
export default HomePage;
