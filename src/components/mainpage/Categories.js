import React from "react";
import { useState } from "react";

const Categories = () => {
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
        {
            cateImg: "./images/category/headphones.png",
            cateName: "Music"
        },
        {
            cateImg: "./images/category/hand-cream.png",
            cateName: "Health"
        },
        {
            cateImg: "./images/category/dog.png",
            cateName: "Mobiles"
        },
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <div className="category">
                <div >
                    <div className="dropdown-button" onClick={toggleDropdown}>
                        Categories
                    </div>
                    {data.map((value, index) => {
                        return (
                            <div className="box f_flex" key={index}>
                                <img src={value.cateImg} alt="" />
                                <span>{value.cateName}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </>
    )
}
// { data.map((value, index) => {
//     return (
//         <div className="box f_flex" key={index}>
//             <img src={value.cateImg} alt="" />
//             <span>{value.cateName}</span>
//         </div>
//     )
// })}

export default Categories;