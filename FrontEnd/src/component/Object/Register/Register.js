import React from 'react';
import { 
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Card,
    Container,
    CardTitle,
    CardBody
 } from 'reactstrap';
import styles from './Regular.module.css'

 export default props => {
     return (
         <Container id='formProduct' style={ styles.formProduct }>
             <Card id='formCard'>
                 <CardTitle id='cardTitle'>
                     <h1>Product Registration</h1>
                 </CardTitle>
                 <hr />
                 <CardBody>
                     <Form onSubmit={(e) => props.submitProduct(e)}>
                         <FormGroup>
                             <Row>
                                 <Col sm={2}>
                                     <Label for='name'>Product Name</Label>
                                 </Col>
                                 <Col sm={10}>
                                     <Input
                                         type='text'
                                         name='name'
                                         id='name'
                                         placeholder='Please enter your name'
                                         defaultValue={props.name}
                                         onChange={({target: {value}}) => props.nameChange(value)}
                                     />
                                 </Col>
                             </Row>
                         </FormGroup>
                         <FormGroup>
                             <Row>
                                 <Col sm={2}>
                                     <Label for='img'>Image</Label>
                                 </Col>
                                 <Col sm={10}>
                                     <Input
                                         type='text'
                                         name='image'
                                         id='img'
                                         placeholder='Please enter image url, if you have multiple please put commas'
                                         defaultValue={props.img}
                                         onChange={({target: {value}}) => props.imageChange(value)}
                                     />
                                 </Col>
                             </Row>
                         </FormGroup>
                         <FormGroup>
                             <Row id='priceLabel'>
                                 <Row sm={6} id='newPriceLabel'>
                                     <Col sm={4}>
                                         <Label for='np'>New Price</Label>
                                     </Col>
                                     <Col sm={7}>
                                         <Input
                                             type='text'
                                             name='newPrice'
                                             id='np'
                                             placeholder='Please enter the new price'
                                             defaultValue={props.newPrice}
                                             onChange={({target: {value}}) => props.newPriceChange(value)}
                                         />
                                     </Col>
                                 </Row>
                                 <Row sm={6} id='oldPriceLabel'>
                                     <Col sm={4}>
                                         <Label for='op'>Old Price</Label>
                                     </Col>
                                     <Col sm={8}>
                                         <Input
                                             type='text'
                                             name='oldPrice'
                                             id='op'
                                             placeholder='Please enter your old price'
                                             defaultValue={props.oldPrice}
                                             onChange={({target: {value}}) => props.oldPriceChange(value)}
                                         />
                                     </Col>
                                 </Row>
                             </Row>
                         </FormGroup>
                         <FormGroup>
                             <Row>
                                 <Col sm={2}>
                                     <Label for='desc'>Description</Label>
                                 </Col>
                                 <Col sm={10}>
                                     <Input
                                         type='text'
                                         name='description'
                                         id='desc'
                                         placeholder='Please enter the description'
                                         defaultValue={props.description}
                                         onChange={({target: {value}}) => props.descriptionChange(value)}
                                     />
                                 </Col>
                             </Row>
                         </FormGroup>
                         <FormGroup>
                             <Row>
                                 <Col sm={2}>
                                     <Label for='features'>Feature</Label>
                                 </Col>
                                 <Col sm={10}>
                                     <Input
                                         type='text'
                                         name='features'
                                         id='features'
                                         placeholder='Please enter features splitted with comma'
                                         defaultValue={props.feature}
                                         onChange={({target: {value}}) => props.featureChange(value)}
                                     />
                                 </Col>
                             </Row>
                         </FormGroup>
                         <Button>Submit</Button>
                     </Form>
                 </CardBody>
            </Card>
         </Container>
         
         
     );
 };