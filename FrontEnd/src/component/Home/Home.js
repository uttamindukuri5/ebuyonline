import React from 'react'; 
import { 
    Row, 
    Button,
    Container,
    Card,
    CardText,
    CardTitle,
    CardBody
 } from 'reactstrap';
 import { card, body } from './Home.module.css';

 export default props => {
    const store_items = [];
    for (const item of props.items) {
        store_items.push(
            <Card style={ card }>
                 <img src={ item.img[0] } className='card-img-top'/>
                 <CardBody>
                     <CardTitle>{ item.name }</CardTitle>
                     <CardText>${ item.newPrice }</CardText>
                     <Button href="#" color="primary">Link</Button>
                 </CardBody>
             </Card>
        );
    }

    return (
        <div className="App">
            <Container fluid={true} style={ body }>
                <Row>
                    { store_items }
                </Row>
            </Container>
        </div>
    );
 };