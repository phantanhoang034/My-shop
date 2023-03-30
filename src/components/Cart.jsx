import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { castToVND } from "../common";
import { deleteCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.carts);
  
  console.log("check cart", cart);
  const handleDeleteCart = (item) => {
    // console.log(item.product.id)
    dispatch(deleteCart(item.product.id));
  };

  const totalPrice = () => {
    let total = 0;
    for(let i =0; i<cart.length; i++) {
      total+= cart[i].product.price * cart[i].qtt
    }
    return total
  }
  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="cart-null">
          <div className="cart-image">
            <img
              src="https://routine.vn/static/version1652808531/frontend/Magenest/routine_desktop/vi_VN/images/cart_empty.svg"
              alt=""
            />
          </div>
          <ul>
            <li>GIỎ HÀNG TRỐNG RỖNG</li>
            <li>Bạn không có sản phẩm nào trong giỏ hàng</li>
          </ul>
        </div>
      ) : (
        <div className="cart-product">
          <h2>GIỎ HÀNG</h2>
          {cart.map((item) => (
            <div className="check">
              <img src={item.product.img} alt="" />
              <div className="item">
                <p>{item.product.name}</p>
                <p>{item.size}</p>
                <li>{castToVND(item.product.price)}</li>
                <div className="checks">
                  <div className="checks-left">
                    <input
                      // onClick={() => giam(quantity)}
                      type="button"
                      value="-"
                    />
                    <input
                      id="quantity"
                      // min="1"
                      // name="quantity"
                      // type="text"
                      value={item.qtt}
                    />
                    <input
                      // onClick={() => setQuality(quantity + 1)}
                      type="button"
                      value="+"
                    />
                  </div>
                  <div className="checks-right">
                    <span
                      onClick={() => {
                        handleDeleteCart(item);
                      }}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="total">Tổng tiền: {castToVND(totalPrice())}</div>
          {/* <div className="shoppingcart-bill">
            <button>
              <span>TIẾN HÀNH THANH TOÁN</span>
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Cart;
{
  /* <div className="shoppingcart">
              <div className="shoppingcart-total">
                <h4>*Mọi thông tin của quý khách sẽ được bảo mật</h4>
                <p>Tạm tính</p>
                <p>Phí vận chuyển</p>
                <h2>TỔNG SỐ</h2>
              </div>
            </div> */
}
