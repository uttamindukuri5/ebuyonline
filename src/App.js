import React, { useState } from 'react';
import './App.css';
import ObjectPage from './ObjectPage/ObjectPage';
import Navbar from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';
import HomePage from './HomePage/HomePage';
import CartPage from './CartPage/CartPage';

function App() {

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

    var list_items = [
        ["www.google.com", 10],
        ["www.amazon.com", 10],
        ["www.google.com", 10],
        ["www.microsoft.com", 10],
        ["www.google.com", 10],
        ["www.apple.com", 10],
        ["www.google.com", 10],
        ["www.bing.com", 10]
    ]
    return (
      <div className="App" style={backgroundStyle}>
        {/*<Navbar />*/}
        <CartPage

        />
        {/*<HomePage*/}
        {/*    logo="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg"*/}
        {/*    cart="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"*/}
        {/*    login="https://www.trzcacak.rs/myfile/detail/3-39618_login-icon-with-transparent-background.png"*/}
        {/*    img="https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049"*/}
        {/*    items = {list_items}*/}
        {/*/>*/}
        {/*<ObjectPage img='https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049'*/}
        {/*            currentPriceOption={price.priceOption}*/}
        {/*            changePriceOption={priceOptionHandler}*/}
        {/*            price={price.price}*/}
        {/*            quantity={price.quantity}*/}
        {/*            changeQuantity={quantityHandler}/>*/}
        {/*<Footer />*/}
    </div>
  );
}

export default App;
