import React from 'react'
import { Navbar, Row, Col } from 'reactstrap';

const footerComponent = () => {
    const style = {
        position:'absolute',
        width: "100%",
        textAlign: 'center',
        color: 'white',
    };

    const textStyle = {
        display: 'center'
    };

    const gridStyle = {
        width: '100%'
    };

    return (
        <footer style={style}>
            <Navbar color='dark'>
                <Row style={gridStyle}>
                    <Col>
                        <p>About</p>
                    </Col>
                    <Col style={textStyle}>
                        <p>Copyright by EbuyOnline</p>
                    </Col>
                </Row>
                <Row style={gridStyle}>
                    <Col style={textStyle}>
                        Conditions of UsePrivacy NoticeInterest-Based Ads© 1996-2019, Amazon.com, Inc. or its affiliates
                    </Col>
                </Row>
            </Navbar>
        </footer>
    )
};

export default footerComponent;