import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductApi () {
  const { id } =useParams()
  const [ product, setProduct ] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProduct()
  }, [])
  const getProduct = async () => {
    setLoading(true)
    const res = await fetch('https://dummyjson.com/products')
    setProduct(await res.json())
    setLoading(false)
  }
  const Loading = () => {
    return(
        <div>
            <h3>Loading pls wait....</h3>
        </div>
    )
  }

  const ShowProduct =() => {
    return(
        <>
            <div>
                <img src={product.image} alt={product.image} height={400} width={500} />
            </div>
            <div>
                <h4>{product.category}</h4>
                <p>{product.title}</p>
                <h3>{product.price}</h3>
                <p>{product.discription}</p>
            </div>
        </>
    )
  }

    

    return(
        <>
            <div>
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </>
    )
}
export default ProductApi