import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";



const Cart = () => {

    const productUrl = 'https://dummyjson.com/products?limit=5';
    const [data, setData] = useState([]);



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
    useEffect(() => {
        fetchSomthing()
    }, [])






  return (
  <>
   <div className='content grid product' >
        {data.map((value, index) => {
            return(
                <div className='box products' key={index}>
                    <div className='img'>
                        <img src={value.images[0]} alt=''  width='100%'/>
                    </div>
                    <h4>{value.brand}</h4>
                    <span>{value.price}</span>
                </div>
            )
        })}
   </div>
  </>
  )
}

export default Cart
