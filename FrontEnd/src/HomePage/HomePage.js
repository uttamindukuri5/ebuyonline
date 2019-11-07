import React from 'react';
import {Row,
    Button,
    Container,
    Card, CardText, CardTitle, CardBody} from 'reactstrap';

const HomePage = (props) => {
    const cardStyle = {
        width: "33%",
        padding: "10px",
        margin: "auto"
    };
    const bodyStyle = {
        padding: "10px 10% 10px 10%",
        display: "top"
    };
    let store_items = []
    for(let i = 0; i < props.items.length; i++) {
        store_items.push(
            <Card style={cardStyle}>
                 <img src={ props.items[i].img[0] } className='card-img-top'/>
                 <CardBody>
                     <CardTitle>{ props.items[i].name }</CardTitle>
                     <CardText>${props.items[i].newPrice }</CardText>
                     <Button href="#" color="primary">Link</Button>
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
