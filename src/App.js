import React from 'react';
import "./App.css";
import Header from "./Common/header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import { useState, useEffect } from 'react';
import Home from './components/mainpage/Home';
// import FlashDeals from './components/flashDeals/FlashDeals';
import Cart from './Common/cart/Cart';
import Footer from './components/footer/Footer';


const App = () => {
  const [productItems, setProductItems] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [shopItems, setShopItems] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/laptops')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const itemsArray = Array.isArray(data.products) ? data.products : [];
        console.log('Received data:', itemsArray);
        setProductItems(itemsArray);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    //  second data
      fetch('https://dummyjson.com/products/category/automotive') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const shopItemsArray = Array.isArray(data.products) ? data.products : [];
        // Process the data as needed
        console.log('Received shopItem data:', data);
        setShopItems(shopItemsArray);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit){
      setCartItem(cartItem.map((item) =>
       (item.id === product.id ? {...productExit,qty:productExit.qty+1} : item)))
    } else {
      setCartItem([...cartItem,{...product,qty : 1}])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty === 1){
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else{
      setCartItem(cartItem.map((item) => (item.id === product.id ? {...productExit,qty : productExit.qty-1}: item)))
    }
  }

  return (
    <>
      <Router>
        <Header  cartItem={cartItem}/>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
          <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
        </Routes>
        <Footer />
        {/* <Pages cartItem={cartItem} addToCart={addToCart} /> */}
       
      </Router>
    </>
  );
};

export default App;
