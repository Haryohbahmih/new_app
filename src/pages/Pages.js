import React from "react"
import Home from "../components/mainpage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrives/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";
import Annouce from "../components/annoucements/Annouce";
import Wrapper from "../components/wrapper/Wrapper";



const Pages = ({productItems, cartItem, addToCart, shopItems }) => {
    return(
        <>
           <Home  cartItem={ cartItem}/>
           <FlashDeals productItems={productItems} addToCart={addToCart}/>
           <TopCate addToCart={addToCart}/>
           <NewArrivals />
           <Discount />
           <Shop shopItems={shopItems} addToCart={addToCart} />
          <Annouce />
          < Wrapper />
        </>
    )
}

export default Pages;