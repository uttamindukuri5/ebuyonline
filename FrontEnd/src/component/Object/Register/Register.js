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
    Container
 } from 'reactstrap';

 export default props => {
     return (
         <Container>
             <Card>
                <Form onSubmit={(e) => props.submitProduct(e)}>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label for='name'>Name</Label>
                            </Col>
                            <Col>
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
                            <Col>
                                <Label for='img'>Image</Label>
                            </Col>
                            <Col>
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
                        <Row>
                            <Col>
                                <Label for='np'>New Price</Label>
                            </Col>
                            <Col>
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
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label for='op'>Old Price</Label>
                            </Col>
                            <Col>
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
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label for='desc'>Description</Label>
                            </Col>
                            <Col>
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
                            <Col>
                                <Label for='features'>Feature</Label>
                            </Col>
                            <Col>
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
            </Card>
         </Container>
         
         
     );
 };