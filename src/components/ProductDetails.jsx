import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer';
const ProductDetails = (show, product) => {
    const listSize = [
        {
            size: "S"

        },
        {
            size: "M"

        },
        {
            size: "L"

        },
        {
            size: "XL"

        },
        {
            size: "XXL"

        },
    ]
    const [size, setSize] = useState("S");
    const [quantity, setQuality] = useState(1);
    const check = () => {
        show.setShow(!show.show);
    }

    const giam = (quantity) => {
        if (quantity > 1) {
            setQuality(quantity - 1);
        }
    }

    const handleTab = (index) => {
        alert(index)
    }
    return (
        <form className={show.show ? "show-form open-show-form" : "show-form"}>
            <Header />
            <div className='product-details'>
                <div className='product-details-img'>
                    <img src={show.product.img}/>
                </div>

                <div className='product-details-text'>
                    <h1>{show.product.name}</h1>
                    <p>{show.product.price}</p>
                    <span className='name'>MÃ HÀNG HÓA</span>
                    <span className='id'>{show.product.id}</span>
                    <h3>MÀU</h3>
                    <div className='color'>
                        {show.product.colors && show.product.colors.map((item, index) => (
                            <div key={index}>
                                <img src={item.img} 
                                onClick={() => handleTab(index)}
                                />
                            </div>
                        ))}
                    </div>



                    <p className='name'>SIZE</p>
                    <div className='size'>
                        {listSize.map((item, index) => (
                            <div
                                className={size === item.size ? "size-size active" : "size-size"}
                                onClick={() => setSize(item.size)}
                                key={index}
                            >{item.size}</div>

                        ))}
                    </div>
                    <div>
                        <input onClick={() => giam(quantity)} type='button' value='-' />
                        <input id='quantity' min='1' name='quantity' type='text' value={quantity} />
                        <input onClick={() => setQuality(quantity + 1)} type='button' value='+' />
                    </div>



                    <button className='add'>
                        <span>THÊM VÀO GIỎ HÀNG</span>
                    </button>
                    <div>
                        <img src='https://image.useinsider.com/routine/defaultImageLibrary/f8935e3ee14920177958-1652944101.jpeg' />

                    </div>

                </div>

                <div
                    className='close'
                    onClick={() => check()}
                >
                    <i className="fa-solid fa-circle-arrow-left"></i>
                </div>
            </div>
            <Footer />
        </form>

    )
}

export default ProductDetails