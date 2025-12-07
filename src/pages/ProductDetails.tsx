import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ProductsData } from "../components/Products"; // must export ProductsData from Products.tsx

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = ProductsData.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="container py-20">Product not found 😢</div>;
  }

  return (
    <div className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img
        src={product.img}
        alt={product.title}
        className="rounded-lg shadow-lg w-full max-w-md mx-auto"
      />

      <div>
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-3xl font-bold text-primary mb-6">
          ${product.price}
        </p>

        <p className="text-gray-600 mb-8">
          This is a high-quality product that you will love!
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
