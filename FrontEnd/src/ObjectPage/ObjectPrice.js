import React from 'react';
import {Badge, Button, Col, Input, Label, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const objectPrice = (props) => {

    const buttonStyle = {
        width: '100%'
    };

    const priceStyle = {
        textAlign: 'right'
    };

    const priceOption = {
        textAlign: 'left',
        paddingLeft: '40px'
    };

    const quantityStyle = {
        textAlign: 'left'
    };

  return(
      <div className='shadow p-3 mb-5 bg-white rounded'>
          <h4>${ props.price }</h4>
          <hr />
          <Link to="CartPage">
              <Button color='warning' style={buttonStyle}>
                  Add to Cart <FontAwesomeIcon icon={faShoppingCart} size='1x' color='black'/>
              </Button>
          </Link>
          <hr />
          <div>
              <Row>
                  <Col style={priceOption}>
                      <Label>
                          <Input type='radio' value='new' checked={props.priceOption === 'new'}
                                 onChange={props.changePriceOption} />{' '}
                          Buy New
                      </Label>
                  </Col>
                  <Col style={priceStyle}>
                      <Badge color='success'>$598.23</Badge>
                  </Col>
              </Row>
              <Row>
                  <Col style={priceOption}>
                      <Label>
                          <Input type='radio' value='used' checked={props.priceOption === 'used'}
                                 onChange={props.changePriceOption} />{' '}
                          Buy Used
                      </Label>
                  </Col>
                  <Col style={priceStyle}>
                      <Badge color='success'>$478.13</Badge>
                  </Col>
              </Row>
          </div>
          <hr />
          <div>
              <Row>
                  <Col style={quantityStyle}>
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
  )
};

export default objectPrice;