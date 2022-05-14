import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesPage from "./routes/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <div className="main">
            <Header />
            <RoutesPage />
          </div>
        </div>

        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
