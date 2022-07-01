import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import RoutesPage from "./routes/routes";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetails from "./components/ProductDetails";
import data from "./data/data";
import Header from "./components/Header";

function App() {
  // const {product} = data;
  // const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems);
  // const onAdd = (product) => {
  //   const exist = cartItems.find(x => x.id === product.id);
  //   if(exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? {...exist, qty: exist.qty + 1} : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, {...product, qty: 1}]);
  //   }
  // }
  // const onRemove = (product) => {
  //   const exist = cartItems.find(x => x.id === product.id);
  //   if(exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? {...exist, qty: exist.qty - 1} : x
  //       )
  //     );
  //   }
  // }
  return (
    <div>
      <BrowserRouter>
        <div className="custom">
          <div className="main">
            <RoutesPage />
          </div>
        </div>
        {/* <Header cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} countCartItems={cartItems.length}/>
        <ProductDetails product={product} onAdd={onAdd}/> */}
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
