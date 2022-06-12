import React from 'react'
import data from '../data/data'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'

const BannerGirl = () => {
  const [visible, setVisible] = useState(4);
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);


  // const loadMore = () => {
  //   setVisible((prev) => prev + 4);
  // };

  // const slice = data.boyClothes.slice(0, noOfElement);

  const check = (item) => {
    setProduct(item);
    setShow(!show);
  };

  console.log(product);

  return (
    <div className='bannergirl'>
      <div className='bannergirl-girl'>
        <img src='https://routine.vn/media/catalog/category/Web_Banner_Cate_SP_N_.jpg' />
        <ul>
          <Link to="/" className='home-page'>TRANG CHỦ</Link>
          <i className="fas fa-chevron-right"></i>'
          <li>THỜI TRANG NỮ</li>
        </ul>
      </div>



      <div className='container-fluid'>
        <div className='row'>
          {
            data.girlClothes.slice(0, visible).map((item, index) => (
              <div
                className='col-lg-3 col-sm-6 col-xs-12'
                key={index}
                onClick={() => check(item)}
              >
                <img src={item.img} />
                <p>
                  <a>{item.name}</a>
                </p>
                <p>{item.price}</p>
                <div className='option-view-girl'>
                  <div className='row'>
                    {item.colors.map((element => {
                      console.log(element)
                      return(
                        <img src={element.img} alt="" />
                      )
                    }
                      ))}


                  </div>

                </div>
              </div>
            ))
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
        show={show}
        setShow={setShow}
        product={product}
        setProduct={setProduct}
      />
    </div>
  )
}

export default BannerGirl