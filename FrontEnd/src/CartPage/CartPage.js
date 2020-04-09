import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import {
    Navbar,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    ListGroupItemText,
    ListGroupItemHeading,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Label, Input
} from 'reactstrap';

const CartPage = (props) => {
    const listStyle = {
        padding: "20px 0px 0px 0%"
    };
    const checkoutStyle = {
        paddingRight: "10%"
    }
    const rowStyle = {
        border: "None",
        margin: "-20px 0px 0px 0px"
    }
    const textStyle = {
        fontSize: "20px"
    }
    let cartItemsArray = [];
    let thisColor;
    for(let i = 0; i < 8; i++){
        if(i % 2 === 0){
            thisColor = "rgba(0,0,0,.125)";
        }
        else{
            thisColor = "rgb(256,256,256)";
        }
        cartItemsArray.push(
            <ListGroup style={listStyle}>
                <ListGroupItem style={rowStyle}>
                    <Row style={{backgroundColor:thisColor, margin: "-12px -20px -10px -20px"}}>
                        <Col sm={2}>
                            <img src={props.items[i][0]} style={{width:"150px", height:"150px", marginLeft:"-15px"}}/>
                        </Col>
                        <Col sm={8}>
                            <ListGroupItemHeading>{props.items[i][1]}</ListGroupItemHeading>
                            <ListGroupItemText>hi</ListGroupItemText>
                        </Col>
                        <Col sm={2}>
                            <Row>
                                <Label style={textStyle}>Price: $200</Label>
                            </Row>
                            <Row>
                                <Label style={textStyle}>Quantity: 5</Label>
                            </Row>
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
        )
    }

    return(
        <div className="App">
            <Row style={{paddingTop:"30px"}}/>
            <Row>
                <Col sm={8} style={{paddingLeft:"9%"}}>
                   {cartItemsArray}
                </Col>
                <Col sm={4} style={checkoutStyle}>
                    <Card body>
                        <CardTitle style={{fontSize: "30px"}}>Item Checkout</CardTitle>
                        <Row>
                            <Col style={{textAlign:"left"}}>
                                Item price:<br/>
                                Tax:
                            </Col>
                            <Col style={{textAlign:"right"}}>
                                $200 <br/>
                                ${200*.0825}
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col style={{textAlign:"left"}}>
                                Total:
                            </Col>
                            <Col style={{textAlign:"right"}}>
                                ${200 + 200*.0825}
                            </Col>
                        </Row>
                        <br/>
                        <Link to="HomePage">
                            <Button>Checkout</Button>
                        </Link>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingBottom:"30px"}}/>
        </div>
    );
};

export default CartPage;