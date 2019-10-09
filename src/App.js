import React from 'react';
import './App.css';
import ObjectPage from './ObjectPage/ObjectPage';
import Navbar from './HeaderComponent/HeaderComponent';
import Footer from './FooterComponent/FooterComponent';

function App() {

    const backgroundStyle = {
        backgroundColor: '#F0F8FF'
    };

  return (
    <div className="App" style={backgroundStyle}>
        <Navbar />
        <ObjectPage price='2.08' img='https://c402277.ssl.cf1.rackcdn.com/photos/14785/images/story_full_width/shutterstock_532108075.jpg?1512507049'/>
        <Footer />
    </div>
  );
}

export default App;
