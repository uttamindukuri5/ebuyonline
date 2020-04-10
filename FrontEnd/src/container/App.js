import React, { useState, useEffect } from 'react';
import { background } from './App.css';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Home from '../component/Home/Home';
import Object from '../component/Object/Main/Object';

export default () => {
    const
    [ object, setObject ] = useState({}),
    [ hasErrors, setErrors ] = useState(false),
    [ price, setPrice ] = useState({
        priceOption: 'new',
        price: 598.23,
        quantity: 1
    });

    const 
    priceOptionHandler = ({target: { value }}) => {
        const 
        currentPrice = value === 'new' ? 598.23 : 478.13,
        { quantity } = price;
        setPrice({priceOption: value, price: (currentPrice * quantity), quantity});
    },
    quantityHandler = ({target: { value }}) => {
        const
        { priceOption } = price,
        initialPrice = priceOption === 'new' ? 598.23 : 478.13,
        quantity = value;
        setPrice({quantity, price: (initialPrice * quantity), priceOption});
    };

    let listObject;
    if (object.length > 0) {
        listObject = (
            <Home 
                logo='https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg'
                items={ object }
            />
        );
    }
    try {
        useEffect(async () => {
            const response = await fetch('http://localhost:5000/');
            await response
                .json()
                .then(res => setObject(res))
                .catch(err => setErrors(err));
        }, []);
    } catch (err) {
        console.log(err);
    }
    

    return (
        <div className="App" style={background}>
            <Header />
            { listObject }
            <Object img='https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049'
                        currentPriceOption={price.priceOption}
                        changePriceOption={priceOptionHandler}
                        price={price.price}
                        quantity={price.quantity}
                        changeQuantity={quantityHandler}
            />
            <Footer />
        </div>
    );
};