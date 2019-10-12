import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import DisplayImage from './DisplayObjectImage';
import ObjectDescription from './ObjectDescription';

const objectPage = ( props ) => {
    const boxStyle = {
        padding: '3%',
    };

    return(
        <div>
            <Row>
                <Col xs={5}>
                    <div style={boxStyle}>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="http://localhost:3000/">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>The Amazing Sloth</BreadcrumbItem>
                        </Breadcrumb>
                        <DisplayImage img={ props.img }/>
                    </div>
                </Col>
                <Col style={boxStyle}>
                    <h1>The Amazing Sloth</h1>
                    <ObjectDescription />
                </Col>
                <Col>
                    <div style={boxStyle}>
                        <h1>Pricing Section</h1>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default objectPage;