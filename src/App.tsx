import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Products from "./components/Products";
import headphone from "./assets/website/ear.jpg";
import CartPage from "./pages/CartPage";
import { Toaster } from "react-hot-toast";
import TopProducts from "./components/TopProduct";
import Blogs from "./components/Blog";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "30 Jan to 10 Feb",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Welcome and take our best tech product",
  bgColor: "#f42c37",
};


const App = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Category />
            <Category2 />
            <Services />
            <Banner data={BannerData} />
            <Products searchTerm={""} />
            <TopProducts />
            <Blogs/>
          </>
        } />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
