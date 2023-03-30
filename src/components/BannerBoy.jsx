import React from 'react'
import data from "../data/data"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { castToVND } from '../common';
import DetailsGirl from './DetailsGirl';
import ProductDetails from './ProductDetails';

const BannerBoy = () => {
  const [visible, setVisible] = useState(4);
  const [product, setProduct] = useState({});
  // const [show, setShow] = useState(false);



  // const check = (item) => {
  //   setProduct(item);
  //   setShow(!show);
  // };

  // console.log(product);

  return (
    <div className='bannerboy'>
      <div className='bannerboy-boy'>
        <img src='https://routine.vn/media/catalog/category/Sa_n_pha_m_nam.jpg' />
        <ul>
          <Link to="/" className='home-page'>TRANG CHỦ</Link>
          <i className="fas fa-chevron-right"></i>'
          <li>THỜI TRANG NAM</li>
        </ul>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {
            data.boyClothes.slice(0, visible).map((item, index) => {
              // console.log(item)
              return (
                <Link to ={`/${item.id}`}
                  className='col-lg-3 col-sm-6 col-xs-12 test'
                  key={index}
                  // onClick={() => check(item)}
                >
                  <img src={item.img} />
                  <p>
                    <a>{item.name}</a>
                  </p>
                  <p>{castToVND(item.price)}</p>
                  <div className='option-view-boy'>
                    <div className="row">
                      {item.colors.map((element, id) => {
                        return (

                          <img src={element.img} alt="" key={id}/>
                        )
                      })}
                      
                    </div>
                  </div>
                </Link>
              )
            })
          }
          {visible <= data.boyClothes.length ?
            <h3 className='load-more' onClick={() => setVisible(visible + 4)}>
              Xem thêm
            </h3>
            :
            <h3 className='load-more' onClick={() => setVisible(4)}>
              Thu gọn
            </h3>
          }
        </div>
      </div>

      <ProductDetails
        // show={show}
        // setShow={setShow}
        product={product}
        setProduct={setProduct}
      />
    </div>
  )
}
export default BannerBoy