// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BasketProvider } from './components/BasketContext';
import Basket from './components/Basket';

const App = () => {
  return (
    <Router>
      {/* Wrap the entire application with BasketProvider */}
      <BasketProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/header" element={<Header />} />
            {/* Use 'element' instead of 'component' */}
            <Route path="/basket" element={<Basket />} />
          </Routes>
          <Footer />
        </div>
      </BasketProvider>
    </Router>
  );
};

export default App;
