import { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Vortex } from  'react-loader-spinner'


function SlideCard() {
    const [popular, setPopular] = useState([]);
    const splideRef = useRef(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        let interval = setInterval(() => {
            if (splideRef.current) {
                const currentIndex = splideRef.current.index;
                const slideCount = splideRef.current.length;
                const nextIndex = (currentIndex + 1) % slideCount;
                splideRef.current.go(">");
            }
        }, 3000);

        getPopular();

        return () => {
            clearInterval(interval);
        };
    }, []);

    const getPopular = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=4&skip=4');
            const data = await response.json();
            setPopular(data.products);
            console.log(data.products);
            setLoader(false);
        } catch (error) {
            console.log(error);
        }
    };

    // if (!popular || popular.length === 0) {
    //     return <div>Loading...</div>; // or any other fallback UI for no data
    // }

    return (
        < >
            {loader ? (
             <Vortex
             visible={true}
             height="80"
             width="80"
             ariaLabel="vortex-loading"
             wrapperStyle={{}}
             wrapperClass="vortex-wrapper"
             colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
           />
                ) :
                <Splide
                    options={{
                        type: "slide",
                        autoplay: true,
                        //   interval: 3000,
                        speed: 500,
                        rewind: true,
                        resetProgress: true,
                        arrows: false,
                        pagination: false
                    }}
                    ref={splideRef}
                    >
                    {popular.map((product) => {
                        return (
                            <SplideSlide key={product.id} className="box d_flex top">
                                <div className="left" >
                                    <h1>50% Off Your First Shopping</h1>
                                    {/* <p className="title" >{product.title}</p> */}
                                    <p className="desc">{product.description}</p>
                                    <button className="btn-primary"> Visit Collections</button>



                                </div>
                                <div className="right" >
                                    <img src={product.images[0]} alt={product.images} />
                                </div>

                            </SplideSlide>
                        )
                    })}
                </Splide>
            }
        </>
    );
}

export default SlideCard;