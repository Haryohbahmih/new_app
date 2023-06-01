import React from 'react'

const Annouce = () => {
    const myStyle ={
        width: "30%",
        height: "300px",
    }
    const myStyle1 ={
        width: "68%",
        height: "300px",
    }
  return (
   <>
        <section className='annouc background' >
            <div className='container d_flex' >
                <div className='img' style={ myStyle} >
                    <img src='../images/freepix.png.jpg' width='100%' height='100%' />
                </div>
                <div className='img' style={ myStyle1}>
                    <img src='../images/freepix2.jpg' width='100%' height='100%' />
                </div>
            </div>
        </section>
   </>
  )
}

export default Annouce
