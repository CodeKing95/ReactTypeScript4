import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    if (totalQuantity === 0) return;
    setBump(true);
    const timer = setTimeout(() => setBump(false), 300);
    return () => clearTimeout(timer);
  }, [totalQuantity]);

  return (
    <button onClick={() => navigate("/cart")}
      className={`relative p-3 ${bump ? "animate-bounce" : ""}`}>
      <FaOpencart className="text-xl" />
      {totalQuantity > 0 && (
        <div className="w-4 h-4 bg-blue-600 text-white rounded-full absolute -top-1 -right-1 flex items-center justify-center text-xs">
          {totalQuantity}
        </div>
      )}
    </button>
  );
};

export default CartButton;
