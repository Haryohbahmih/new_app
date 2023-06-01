import React from 'react'

const Catg = () => {
    const data = [
        {
            cateImg: "./images/category/fashion.png",
            cateName: "Fashion"
        },
        {
            cateImg: "./images/category/responsive.png",
            cateName: "Electronic"
        },
        {
            cateImg: "./images/category/sedan.png",
            cateName: "Cars"
        },
        {
            cateImg: "./images/category/terrace.png",
            cateName: "Home"
        },
        {
            cateImg: "./images/category/surprise.png",
            cateName: "Gifts"
        },

    ]
    return (
        <>
            <div className='category'>
                <div className='chead d_flex'>
                    <h1>Brands</h1>
                    <h1>Shops</h1>
                </div>
                {
                    data.map((value, index) => {
                        return (
                            <>
                                <div className="boxx  f_flex" key={index}>
                                    <img src={value.cateImg} alt="" />
                                    <span>{value.cateName}</span>
                                </div>
                            </>
                        )
                    })
                }
                <div className='boxx box2'>
                    <button>View All Brands</button>
                </div>
            </div>
        </>
    )
}

export default Catg
