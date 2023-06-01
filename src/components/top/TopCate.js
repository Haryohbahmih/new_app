import React from 'react'
import TopCart from './TopCart'

const TopCate = ({addToCart}) => {
    return (
        <>
            <section className='topCat background'>
                <div className='container' >
                    <div className='heading d_flex'>
                        <div className='heading-left f_flex  '> 
                            <i className='fa fa-border-all'></i>
                            <h2>See Our Products</h2>
                        </div>
                        <div className='heading-right row '>
                            <span>View All</span>
                            <i className='fa fa-caret-right'></i>
                        </div>
                    </div>
                    <TopCart addToCart={addToCart} />
                </div>
            </section>
        </>
    )
}
// heading-left row d_flex
export default TopCate
