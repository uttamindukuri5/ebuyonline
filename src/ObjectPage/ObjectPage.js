import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import DisplayImage from './DisplayObjectImage';

const objectPage = ( props ) => {
    const boxStyle = {
        padding: '3%',
    };

    return(
        <div>
            <Row>
                <Col>
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
                </Col>
            </Row>
        </div>

    )
};

export default objectPage;