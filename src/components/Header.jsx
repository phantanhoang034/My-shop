import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.carts);

  console.log("check cart", cart);
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <i
            className="fa-solid fa-bars"
            onClick={() => setActive(!active)}
          ></i>

          <ul>
            <li>
              <Link to="/boy" className="link-color">
                NAM
              </Link>
            </li>
            <li>
              <Link to="/girl" className="link-color">
                NỮ
              </Link>
            </li>
            <li>
              <Link to="/" className="link-color">
                NEW ARRIVALS
              </Link>
            </li>
            <li>
              <Link to="/" className="link-color">
                COLLECTION
              </Link>
            </li>
            <li>
              <Link to="/" className="color-color">
                SUMMER SALE
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="logo">
          <Link to="/">
            <img src="https://routine.vn/media/logo/websites/1/ezgif-7-ee007e6332a0_2x.png" />
          </Link>
        </div>
        <div className="header-right">
          <Link to className="i fa-solid fa-magnifying-glass"></Link>
          <Link to className="i fa-solid fa-user"></Link>
          <Link to="/addtocart" className="i fa-solid fa-cart-shopping">
            {""} {cart ? <span className="icon">{cart.length}</span> : ""}
          </Link>

          <input placeholder="TÌM SẢN PHẨM" type="search" />
          <ul>
            <li>
              <Link to="/login" className="link-color">
                ĐĂNG NHẬP
              </Link>
            </li>
            <li>
              <Link to="/" className="link-color">
                TRỢ GIÚP
              </Link>
            </li>
            <li>
              <Link to="/addtoCart" className="link-color">
                GIỎ HÀNG
                {""} {cart ? <span className="text">{cart.length}</span> : ""}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Menu active={active} setActive={setActive} />
    </div>
  );
};

export default Header;
