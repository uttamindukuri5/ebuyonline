import React from 'react';

import {
    Navbar, Row, Col,
    ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading} from 'reactstrap';

const CartPage = (props) => {
    const listStyle = {
        padding: "20px 30% 20px 20px"
    }
    return(
        <div className="App">
            <ListGroup style={listStyle}>
                <ListGroupItem active>
                    <Row>
                        <Col sm={4}>
                            <img src={props.items[0][0]} style={{height:"100px"}}/>
                        </Col>
                        <Col sm={8}>
                            <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                            <ListGroupItemText>
                                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                            </ListGroupItemText>
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}
export default CartPage;