import React from "react"
import Categories from "./Categories"
import SlideCard from "./SlideCard"
import Slider from "./Slider"
import  "./Home.css";
import Pages from "../../pages/Pages";
// import Product from "../../api/productPage"


const Home = () => {
    return(
        <>
           <section className="home">
            <div className="container d_flex">
                <Categories />
                {/* < Product /> */}
                <Slider />
              
            </div>
            {/* <Pages /> */}

           </section>
        </>
    )
}

export default Home