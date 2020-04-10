import React from 'react';
import { Navbar, Row, Col } from 'reactstrap';
import { main, text, grid } from './Footer.module.css';

export default () => {
    return (
        <footer id='main' style={main}>
            <Navbar color='dark'>
                <Row className='grid' style={grid}>
                    <Col>
                        <p>About</p>
                    </Col>
                    <Col className='text' style={text}>
                        <p>Copyright by EbuyOnline</p>
                    </Col>
                </Row>
                <Row className='grid' style={grid}>
                    <Col className='text' style={text}>
                        Conditions of UsePrivacy NoticeInterest-Based Ads© 1996-2019, Amazon.com, Inc. or its affiliates
                    </Col>
                </Row>
            </Navbar>
        </footer>
    );
};