import React, { useState, useEffect } from 'react';
import { background } from './App.css';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Home from '../component/Home/Home';
import Object from '../component/Object/Main/Object';
import RegisterProduct from '../component/Object/Register/Register';

export default () => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    };

    const
    [ object, setObject ] = useState({}),
    [ name, setName ] = useState(''),
    [ image, setImage ] = useState(''),
    [ oldPrice, setOldPrice ] = useState(0.00),
    [ newPrice, setNewPrice ] = useState(0.00),
    [ description, setDescription ] = useState(''),
    [ features, setFeatures ] = useState(''),
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
    },
    nameHandler = (value) => setName(value),
    imageHandler = (value) => setImage(value),
    oldPriceHandler = (value) => setOldPrice(value),
    newPriceHandler = (value) => setNewPrice(value),
    descriptionHandler = (value) => setDescription(value),
    featureHandler = (value) => setFeatures(value),
    postProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("img", image);
        formData.append("newPrice", newPrice.toString());
        formData.append("oldPrice", oldPrice.toString());
        formData.append("description", description);
        formData.append("features", features);

        const requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };

        await fetch("http://localhost:5000/submitProduct", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    let listObject;
    if (object.length > 0) {
        listObject = (
            <Home 
                logo='https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg'
                items={ object }
            />
        );
    }
    useEffect(async () => {
        const response = await fetch('http://localhost:5000/');
        await response
            .json()
            .then(res => setObject(res))
            .catch(err => setErrors(err));
    }, []);
    

    return (
        <div className="App" style={background}>
            <Header />
            {/* { listObject }
            <Object img='https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049'
                        currentPriceOption={price.priceOption}
                        changePriceOption={priceOptionHandler}
                        price={price.price}
                        quantity={price.quantity}
                        changeQuantity={quantityHandler}
            /> */}
            <RegisterProduct 
                name={name}
                img={image}
                newPrice={newPrice}
                oldPrice={oldPrice}
                description={description}
                features={features}
                nameChange={nameHandler}
                imageChange={imageHandler}
                newPriceChange={newPriceHandler}
                oldPriceChange={oldPriceHandler}
                descriptionChange={descriptionHandler}
                featureChange={featureHandler}
                submitProduct={postProduct}
            />
            <Footer />
        </div>
    );
};