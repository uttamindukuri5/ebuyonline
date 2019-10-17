import React, { useState } from 'react';
import './App.css';
import ObjectPage from './ObjectPage/ObjectPage';
import Navbar from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';
import HomePage from './HomePage/HomePage'

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
    var store_items_arr = [
        ["https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049", "20000.00"],
        ["https://www.rd.com/wp-content/uploads/2016/04/sloths-slide3SamTrull-1200x1200.jpg", "10000.00"],
        ["https://i.ytimg.com/vi/uLl9UyNn3XI/maxresdefault.jpg", "30000.00"],
        ["https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg", "50000.00"],
        ["https://www.dw.com/image/45189092_303.jpg", "20000.00"],
        ["https://sc01.alicdn.com/kf/ULB8FQKdLODEXKJk43Oqq6Az3XXas/china-fresh-sweet-delicious-red-fruit-apples.jpg", "0.50"],
        ["https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_61d5e7a7-4a65-447d-99b4-c458b26e8d0a.jpg", "0.80"],
        ["https://cdn.mos.cms.futurecdn.net/JEKZM22ZasnFC7JFGkAMvU-320-80.jpg", "2.00"]
    ];
  return (
    <div className="App" style={backgroundStyle}>
        <Navbar />
        <HomePage
            logo="https://www.ebuyonline.co.uk/img/ebuy-online-ltd-logo-1525558004.jpg"
            cart="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"
            login="https://www.trzcacak.rs/myfile/detail/3-39618_login-icon-with-transparent-background.png"
            items={store_items_arr}
        />
        {/*<ObjectPage img='https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049'*/}
        {/*currentPriceOption={priceOption.priceOption} changePriceOption={priceOptionHandler} price={priceOption.price} />*/}
        <Footer />
    </div>
  );
}

export default App;
