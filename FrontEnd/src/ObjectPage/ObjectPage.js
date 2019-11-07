import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import DisplayImage from './DisplayObjectImage';
import ObjectDescription from './ObjectDescription';
import ObjectPrice from './ObjectPrice';

const objectPage = ( props ) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const boxStyle = {
        padding: '3%',
    };

    return(
        <div style={boxStyle}>
            <Row>
                <Col xs={5}>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="http://localhost:3000/">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>The Amazing Sloth</BreadcrumbItem>
                        </Breadcrumb>
                        <DisplayImage img={ props.img }/>
                    </div>
                </Col>
                <Col>
                    <ObjectDescription />
                </Col>
                <Col>
                    <ObjectPrice priceOption={props.currentPriceOption} changePriceOption={props.changePriceOption} price={props.price}
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
    )
};

export default objectPage;