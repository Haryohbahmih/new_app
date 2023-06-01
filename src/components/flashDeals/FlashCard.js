import React from 'react';
// import Slider from "react-slick";
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";





const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setPerPage(1);
      } else if (window.innerWidth <= 900) {
        setPerPage(2);
      } else if (window.innerWidth <= 1200) {
        setPerPage(4);
      } else {
        setPerPage(4);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <>

      <Splide options={{
        pagination: false,
        infinite: true,
        speed: 500,
        perPage: perPage,
        //    gap:'3rem',
        arrows: false,
      }} >
        {
          productItems.map((Items, index) => {
            return (
              <SplideSlide key={index}>
                <div className='box'>
                  <div className='product mtop'>

                    <div className='img' >
                      <span className='discount'>{Items.discountPercentage}% Off</span>
                      <img src={Items.images[0]} alt='' style={{ width: '100%', marginTop: '20px', height: '100%' }} />
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
              </SplideSlide>

            )

          })
        }
      </Splide>

    </>
  )
}

export default FlashCard;

