import React from 'react';
import { useState, useEffect, useRef } from "react";
import './stylee.css'

const TopCart = ({addToCart}) => {
  const [topcart, setTopCart] = useState([])

  const cart = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=100');
      if (res.status === 200) {
        const data = await res.json();
        setTopCart(data.products);
        console.log(data.products)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect (() => {
    cart();
  },[])

  return (
    <>
      <div className="top-cart container d_flex grid3">
        {
          topcart.map((item, index) => {
            return(
              <div className="top-cart-item " key={index} onClick={() => addToCart(item)}>
                <div className="top-cart-item-image">
                  <img src={item.images[0]} alt="" />
                </div>
                <div className='top-cart-text' >
                  <p>{item.brand}</p>
                  <p>{item.title}</p>
                  <p> &#36; <span>{item.price}.00</span></p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default TopCart
