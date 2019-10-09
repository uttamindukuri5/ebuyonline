import React from 'react'
import { Navbar } from 'reactstrap';

const footerComponent = () => {
    const style = {
        position:'absolute',
        left:'0',
        bottom:'0',
        right:'0',
        textAlign: 'center',
        color: 'white'
    };

    return (
        <footer style={style}>
            <Navbar color='dark'>
                <p>Copyright by Ebuy</p>
            </Navbar>
        </footer>
    )
};

export default footerComponent;