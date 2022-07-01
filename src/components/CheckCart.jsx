import React from "react";
import { useState } from "react";

const CheckCart = () => {
  const [quantity, setQuality] = useState(1);

  const giam = (quantity) => {
    if (quantity > 1) {
      setQuality(quantity - 1);
    }
  };
  return (
    <div className="checkcart">
      <h2>GIỎ HÀNG</h2>

      <div className="checkcart-cart">
        <img
          src="https://routine.vn/media/catalog/product/cache/ccb972c2335db7470b8950e946d67d4f/d/s/dsc_5661_3.jpg"
          alt=""
        />
        <div className="item">
          <a>ÁO SƠ MI TAY NGẮN, TUA LAI. OVERSIZE FORM - 10S21SHS021</a>
          <p>TRẮNG/M</p>
          <li>306.000đ</li>
          <div>
            <input onClick={() => giam(quantity)} type="button" value="-" />
            <input
              id="quantity"
              min="1"
              name="quantity"
              type="text"
              value={quantity}
            />
            <input
              onClick={() => setQuality(quantity + 1)}
              type="button"
              value="+"
            />
          </div>
        </div>

        {/* <div className="shoppingcart">
          <div className="shoppingcart-total">
            <h4>*Mọi thông tin của quý khách sẽ được bảo mật</h4>
            <p>Tạm tính</p>
            <p>Phí vận chuyển</p>
            <h2>TỔNG SỐ</h2>
          </div>
        </div> */}
      </div>
      
      <div className="shoppingcart-bill">
        <button>
          <span>TIẾN HÀNH THANH TOÁN</span>
        </button>
      </div>
    </div>
  );
};

export default CheckCart;
