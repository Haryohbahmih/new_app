import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {

    const productUrl = 'https://dummyjson.com/products';
    const [loader, setLoader] = useState(true);
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
        <> <div>
              {data.map((item, index) => {
                  return (
                        <div key={index} >
                            <div>
                                <img src={item.images[0]} style={{ width: '100%', boxSizing: 'border-box', height: '210px' }} />
                            </div>

                            <div>
                                <p>{item.id}</p>
                                <p>{item.title}</p>
                                <p> &#36; <span>{item.price}</span></p>
                                <div>{item.description}</div>
                            </div>
                        </div>
                    )
              })}
          </div >
        </>
    )
}
export default Product;

