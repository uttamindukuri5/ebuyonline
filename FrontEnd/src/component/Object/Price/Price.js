import React from 'react'; 
import { Badge, Button, Col, Input, Label, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { button, price, option, quantity } from './Price.module.css'

export default props => {
    return (
        <div className='shadow p-3 mb-5 bg-white rounded'>
          <h4>${ props.price }</h4>
          <hr />
          <Button id='button' color='warning' style={button}>
              Add to Cart <FontAwesomeIcon icon={faShoppingCart} size='1x' color='black'/>
          </Button>
          <hr />
          <div>
              <Row>
                  <Col className='option' style={option}>
                      <Label>
                          <Input type='radio' value='new' checked={props.priceOption === 'new'}
                                 onChange={props.changePriceOption} />{' '}
                          Buy New
                      </Label>
                  </Col>
                  <Col className='price' style={price}>
                      <Badge color='success'>$598.23</Badge>
                  </Col>
              </Row>
              <Row>
                  <Col className='option' style={option}>
                      <Label>
                          <Input type='radio' value='used' checked={props.priceOption === 'used'}
                                 onChange={props.changePriceOption} />{' '}
                          Buy Used
                      </Label>
                  </Col>
                  <Col className='price' style={price}>
                      <Badge color='success'>$478.13</Badge>
                  </Col>
              </Row>
          </div>
          <hr />
          <div>
              <Row>
                  <Col id='quantity' style={quantity}>
                      <Label>Quantity: </Label>
                  </Col>
                  <Col>
                      <Input type="select" name="select" id="exampleSelect" value={props.quantity} onChange={props.changeQuantity}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                      </Input>
                  </Col>
              </Row>
          </div>
      </div>
    );
};