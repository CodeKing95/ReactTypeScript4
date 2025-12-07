import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartButton = () => {
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);

  return (
    <button className="relative p-3">
      <FaOpencart className="text-xl text-gray-600 dark:text-gray-400" />
      
      {totalQuantity > 0 && (
        <div className="w-4 h-4 bg-blue-500 text-white rounded-full absolute
        -top-1 -right-1 flex items-center justify-center text-xs">
          {totalQuantity}
        </div>
      )}
    </button>
  );
};

export default CartButton;
