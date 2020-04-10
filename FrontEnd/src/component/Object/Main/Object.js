import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Image from '../Image/Image';
import Description from '../Description/Description';
import Price from '../Price/Price';
import { box } from './Object.module.css';

export default props => {
    return (
        <div id='box' style={box}>
            <Row>
                <Col xs={5}>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="http://localhost:3000/">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>The Amazing Sloth</BreadcrumbItem>
                        </Breadcrumb>
                        <Image img={ props.img }/>
                    </div>
                </Col>
                <Col>
                    <Description />
                </Col>
                <Col>
                    <Price priceOption={props.currentPriceOption} changePriceOption={props.changePriceOption} price={props.price}
                        quantity={props.quantity} changeQuantity={props.changeQuantity}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Rating Section</h1>
                </Col>
                <Col>
                    <h1>Comment Section</h1>
                </Col>
            </Row>
        </div>
    );
};