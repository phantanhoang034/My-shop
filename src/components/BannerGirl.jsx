import React from 'react'
import data from "../data/data"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const BannerGirl = () => {
  const [visible, setVisible] = useState(4);
  const [product, setProduct] = useState({});
  // const [show, setShow] = useState(false);



  // const check = (item) => {
  //   setProduct(item);
  //   setShow(!show);
  // };

  // console.log(product);

  return (
    <div className='bannergirl'>
      <div className='bannergirl-girl'>
        <img src='https://routine.vn/media/catalog/category/Web_Banner_Cate_SP_Nam.jpg' />
        <ul>
          <Link to="/" className='home-page'>TRANG CHỦ</Link>
          <i className="fas fa-chevron-right"></i>'
          <li>THỜI TRANG NAM</li>
        </ul>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {
            data.girlClothes.slice(0, visible).map((item, index) => {
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
                  <p>{item.price}</p>
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
          {visible <= data.girlClothes.length ?
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
export default BannerGirl