import React from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import type { Product } from "./ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";


import Img1 from '../assets/product/P5.png';
import Img2 from '../assets/product/Xbox.png';
import Img3 from '../assets/product/nin.png';
import Img4 from '../assets/product/sam.jpg';
import Img5 from '../assets/product/ap.jpg';
import Img7 from '../assets/product/samsung.png';
import Img9 from '../assets/product/G9.png';
import Img10 from '../assets/product/razer.jpg';
import Img11 from '../assets/product/chair.png';
import Img12 from '../assets/product/ray.jpg';
import Img13 from '../assets/product/beats.jpg';
import Img14 from '../assets/product/gta6.jpg';
import Img15 from '../assets/product/charger.jpg';
import Img16 from '../assets/product/ear.jpg';
import Img17 from '../assets/product/ipad.jpg';
import Img18 from '../assets/product/vr.jpg';

const ProductsData: Product[] = [
  {
    id: 1,
    img: Img1,
    title: "Playstation 5",
    price: 299,
    aosDelay: "300",
  },
   {
    id: 2,
    img: Img2,
    title: "Xbox Series X",
    price: 450,
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Nintendo Switch",
    price: 220,
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Samsung Galaxy",
    price: 799,
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Apple Laptop",
    price: 1200,
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Samsung Laptop",
    price: 1500,
    aosDelay: "0",
  },
  {
    id: 9,
    img: Img9,
    title: "Samsung Odessey G9 Oled",
    price: 1999,
    aosDelay: "0",
  },
  {
    id: 10,
    img: Img10,
    title: "Razer Mouse & Keybaord",
    price: 150,
    aosDelay: "0",
  },
  {
    id: 11,
    img: Img11,
    title: "Razer Chair",
    price: 300,
    aosDelay: "0",
  },
  {
    id: 12,
    img: Img12,
    title: "4k Blu Ray Player",
    price: 450,
    aosDelay: "0",
  },
  {
    id: 13,
    img: Img13,
    title: "Beats",
    price: 500,
    aosDelay: "0",
  },
  {
    id: 14,
    img: Img14,
    title: "GTA 6",
    price: 99,
    aosDelay: "0",
  },
  {
    id: 15,
    img: Img15,
    title: "Iphone Charger",
    price: 20,
    aosDelay: "0",
  },
  {
    id: 16,
    img: Img16,
    title: "Samsung Earbuds",
    price: 250,
    aosDelay: "0",
  },
  {
    id: 17,
    img: Img17,
    title: "Apple Ipad Pro",
    price: 2000,
    aosDelay: "0",
  },
  {
    id: 18,
    img: Img18,
    title: "Playstation VR2",
    price: 120,
    aosDelay: "0",
  },  
];



const Products: React.FC = () => {
  const dispatch = useDispatch();
  

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product)); // 👈 now updates Redux!
     toast.success(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="container">
      <Heading title="Our Products" subtitle="Explore Our Products" />
      <ProductCard data={ProductsData} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Products;
