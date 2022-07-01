import React, { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import data from '../data/data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { castToVND } from '../common';
const ProductDetails = (product) => {

    const dispatch = useDispatch();

    const { id } = useParams();
    const [products, setProducts] = useState();
    const [size, setSize] = useState("S");
    const [quantity, setQuality] = useState(1);

    useEffect(() => {
      const res = data.boyClothes.find((item) => item.id + "" === id);
      setProducts(res);
    }, [id]);




    if (!products) return "";
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
    // const check = () => {
    //     show.setShow(!show.show);
    // }

    const giam = (quantity) => {
        if (quantity > 1) {
            setQuality(quantity - 1);
        }
    }

    const handleTab = (index) => {
        alert(index)
    }

    const handleAddToCart = (item) => {
        // console.log({product: item.product, qtt: item.quantity})
        alert("Thêm vào giỏ hàng thành công!!!");
        dispatch(addToCart({product: item.product, qtt: item.quantity, size: item.size}))
        
    }

    console.log(size)
    return (
        // <div>{products.name}</div>
        // <div>
        //     <Header />
            <div className='product-details'>
                <div className='product-details-img'>
                    <img src={products.img}/>
                </div>
                <div className='product-details-text'>
                    <h1>{products.name}</h1>
                    <p>{castToVND(products.price)}  </p>
                    <span className='name'>MÃ HÀNG HÓA</span>
                    <span className='id'>{products.id}</span>
                    <h3>MÀU</h3>
                    <div className='color'>
                        {products.colors && products.colors.map((item, index) => (
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
                        <input onClick={() => giam(quantity)}  value='-' />
                        <input id='quantity' min='1' name='quantity'  value={quantity} />
                        <input onClick={() => setQuality(quantity + 1)}  value='+' />
                    </div>
                    
                    <button className='add'>
                        <span onClick={() => {handleAddToCart({product: products,quantity: quantity, size: size})}} style={{cursor: "pointer"}}>THÊM VÀO GIỎ HÀNG</span>
                    </button>
                    
                   
                    <div>
                        <img src='https://image.useinsider.com/routine/defaultImageLibrary/f8935e3ee14920177958-1652944101.jpeg' alt='Giao hàng nhanh' />

                    </div>
                   

                </div>

                {/* <div
                    className='close'
                    // onClick={() => check()}
                >
                    <i className="fa-solid fa-circle-arrow-left"></i>
                </div> */}
            </div>
        //     <Footer />
        // </div>

    )
}

export default ProductDetails