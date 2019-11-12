import React from 'react'
import { Navbar, Row, Col } from 'reactstrap';

const footerComponent = () => {
    const footerStyle = {
        textAlign: 'center',
        color: 'white',
        bottom: '0',
        width: '100%'
    };

    const textStyle = {
        display: 'center'
    };

    const gridStyle = {
        width: '100%'
    };

    return (
        <footer style={footerStyle}>
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
                        Conditions of UsePrivacy NoticeInterest-Based Ads© 1996-2019, EBuyOnline.com, Inc. or its affiliates
                    </Col>
                </Row>
            </Navbar>
        </footer>
    )
};

export default footerComponent;