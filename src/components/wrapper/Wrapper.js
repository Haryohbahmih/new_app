import React from 'react'
import './wrapperstyle.css'

const Wrapper = () => {
    const info = [
        {
            cover: <i class='fa-solid fa-truck-fast'></i>,
            title: "Worldwide Delivery",
            docs: "We offer competitive prices on our 100 million plus product any range."
        },
        {
            cover: <i class='fa-solid fa-truck-fast'></i>,
            title: "Worldwide Delivery",
            docs: "We offer competitive prices on our 100 million plus product any range."
        },
        {
            cover: <i class='fa-solid fa-truck-fast'></i>,
            title: "Worldwide Delivery",
            docs: "We offer competitive prices on our 100 million plus product any range."
        },
        {
            cover: <i class='fa-solid fa-truck-fast'></i>,
            title: "Worldwide Delivery",
            docs: "We offer competitive prices on our 100 million plus product any range."
        }
    ]


    return (
        <>
            <section className='wrapper background' >
                <div className='container grid2'>
                    {
                        info.map((value, index) => {
                            return (
                                <>
                                    <div className='product' key={index} >
                                        <div className='img icon_circle '>
                                            <i>{value.cover}</i>
                                        </div>
                                        <h3>{value.title}</h3>
                                        <p>{value.docs}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Wrapper
