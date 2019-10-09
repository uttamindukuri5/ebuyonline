import React from 'react'
import { Navbar, Row, Col } from 'reactstrap';

const footerComponent = () => {
    const style = {
        position:'absolute',
        left:'0',
        bottom:'0',
        right:'0',
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
            </Navbar>
        </footer>
    )
};

export default footerComponent;