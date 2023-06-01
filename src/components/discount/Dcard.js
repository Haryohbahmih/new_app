import React from 'react'
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";



const Dcard = () => {

    const productUrl = 'https://dummyjson.com/products?limit=20&skip=18';
    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(5);



    const fetchSomthing = async () => {
        try {
            const response = await axios(productUrl)
            if (response.status === 200) {
                const data = await response.data.products
                console.log(data)
                setData(data)
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    // useEffect(() => {
    //     fetchSomthing()
    // }, [])

    const splideRef = useRef(null);

    useEffect(() => {

        const resizePerPage = () => {
            if (window.innerWidth <= 600) {
                setPerPage(1);
              } else if (window.innerWidth <= 900) {
                setPerPage(2);
              } else if (window.innerWidth <= 1200) {
                setPerPage(4);
              } else {
                setPerPage(5);
              }
          };


        let interval = setInterval(() => {
            if (splideRef.current) {
                const currentIndex = splideRef.current.index;
                const slideCount = splideRef.current.length;
                const nextIndex = (currentIndex + 1) % slideCount;
                splideRef.current.go(">");
            }

        }, 3000);

        fetchSomthing()

        resizePerPage(); // Set initial number of images per page based on screen size

        window.addEventListener('resize', resizePerPage); // Adjust number of images per page on window resize

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizePerPage);
        };
    }, []);


    return (
        <>
            <Splide
                options={{
                    type: "slide",
                    autoplay: true,
                    //   interval: 3000,
                    perPage:perPage,
                    speed: 500,
                    rewind: true,
                    resetProgress: true,
                    arrows: false,
                    pagination: false,
                    margin: 200,
                }}
                ref={splideRef}
            >



                {data.map((value, index) => {
                    return (
                        <>
                            <SplideSlide>
                                <div className='product' key={index}>
                                    <div className='boxes'>
                                        <div className='imgs'>
                                            <img src={value.images[0]} alt='' className='product-image' />
                                        </div>
                                        <h4>{value.brand}</h4>
                                        <span>{value.price}</span>
                                    </div>
                                </div>
                            </SplideSlide>
                        </>
                    )
                })}



            </Splide>
        </>
    )
}

export default Dcard
