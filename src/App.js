import React, { useState } from 'react';
import './App.css';
import ObjectPage from './ObjectPage/ObjectPage';
import Navbar from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';

function App() {

    const [priceOption, setPriceOption] = useState({
        priceOption: 'new',
        price: 598.23
    });

    const priceOptionHandler = (event) => {
        let price;
        if (event.target.value === 'new') {
            price = 598.23;
        } else {
            price = 478.13;
        }
        setPriceOption({priceOption: event.target.value, price: price})
    };

    const backgroundStyle = {
        backgroundColor: '#F0F8FF'
    };

  return (
    <div className="App" style={backgroundStyle}>
        <Navbar />
        <ObjectPage img='https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049'
        currentPriceOption={priceOption.priceOption} changePriceOption={priceOptionHandler} price={priceOption.price} />
        <Footer />
    </div>
  );
}

export default App;
