import React from 'react';
// import Slider from "react-slick";
import { useEffect, useState } from 'react';





const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }




  return (
    <>
      {shopItems.map((Items, index) => {
        return (
          <div key={index}>
            <div className='box'>
              <div className='product mtop'>
                <div className='img' >
                  <span className='discount'>{Items.discountPercentage}% Off</span>
                  <img src={Items.images[0]} alt=''/>
                  <div className='product-like'>
                    <label>0</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{Items.brand}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>{Items.price}.00</h4>
                    <button onClick={() => addToCart(Items)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )

      })}


    </>
  )
}

export default ShopCart;
