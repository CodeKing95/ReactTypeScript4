import React from "react";
import Button from "./Button";


export type Product = {
  id: number;
  img: string;
  title: string;
  price: number;
  aosDelay?: string;
};

type ProductCardProps = {
  data: Product[];
  onAddToCart: (product: Product) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ data, onAddToCart }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            className="group"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="h-[180px] w-[260px] object-cover rounded-md"
              />

              <div className="hidden group-hover:flex absolute
                top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
                h-full w-full text-center
                group-hover:backdrop-blur-sm justify-center
                items-center duration-200"
              >
                <Button
                  text="Add to cart"
                  bgColor="bg-primary"
                  textColor="text-white"
                  handler={() => onAddToCart(item)}
                />
              </div>
            </div>

            <div className="leading-7">
              <h2 className="font-semibold">{item.title}</h2>
              <h2 className="font-bold">${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
