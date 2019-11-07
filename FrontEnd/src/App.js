import React, { useState, useEffect } from 'react';
import './App.css';
import ObjectPage from './ObjectPage/ObjectPage';
import Header from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';
import HomePage from './HomePage/HomePage'

function App() {

    const [object, setObject] = useState({});
    const [hasErrors, setErrors] = useState(false);

    async function fetchData() {
        const response = await fetch("http://localhost:5000/");
        await response
            .json()
            .then(res => setObject(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(hasErrors);

    const [price, setPrice] = useState({
        priceOption: 'new',
        price: 598.23,
        quantity: 1
    });

    const priceOptionHandler = (event) => {
        let currentPrice;
        let quantity = price.quantity;
        if (event.target.value === 'new') {
            currentPrice = 598.23;
        } else {
            currentPrice = 478.13;
        }
        setPrice({priceOption: event.target.value, price: (currentPrice * quantity), quantity: quantity});
    };

    const quantityHandler = (event) => {
        let initialPrice;
        if (price.priceOption === 'new') {
            initialPrice = 598.23;
        } else {
            initialPrice = 478.13;
        }
        const quantity = event.target.value;
        setPrice({quantity: quantity, price: (initialPrice * quantity), priceOption: price.priceOption})
    };

    const backgroundStyle = {
        height: '100%'
    };
    let listObject;

    if (object.length > 0) {
        listObject = (
            <HomePage
                logo="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg"
                items = {object}
            />
        )
    }
    return (
      <div className="App" style={backgroundStyle}>
        <Header />
          { listObject }
        {/*<ObjectPage img='https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049'*/}
        {/*            currentPriceOption={price.priceOption}*/}
        {/*            changePriceOption={priceOptionHandler}*/}
        {/*            price={price.price}*/}
        {/*            quantity={price.quantity}*/}
        {/*            changeQuantity={quantityHandler}/>*/}
        <Footer />
    </div>
  );
}

export default App;
