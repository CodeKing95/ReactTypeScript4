import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} from "../redux/cartSlice";
import type { RootState } from "../redux/store";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div className="container py-12">
      <h2 className="text-4xl font-bold mb-10 text-center">🛒 Shopping Cart</h2>

      {items.length === 0 ? (
        <p className="text-center text-lg font-medium text-gray-600">
          Your cart is empty! Keep shopping 😊
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-6 border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 rounded-lg object-cover border"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-500 text-sm">${item.price} each</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center"
                      >
                        –
                      </button>

                      <span className="font-semibold w-6 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex justify-center items-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Item total price */}
                <div className="text-right">
                  <p className="font-bold text-lg">${item.totalPrice}</p>

                  {/* Remove */}
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 hover:text-red-700 text-sm mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary / Checkout Box */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
            <h3 className="font-bold text-xl border-b pb-2">Order Summary</h3>
            <p className="flex justify-between text-lg">
              Total Items: <span>{totalQuantity}</span>
            </p>
            <p className="flex justify-between font-bold text-2xl">
              Total: <span>${totalPrice}</span>
            </p>

            {/* Checkout Button */}
            <button
              className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg mt-4 font-semibold transition"
            >
              Checkout
            </button>

            {/* Clear Cart */}
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 hover:bg-red-600 text-white w-full py-3 rounded-lg mt-2 font-semibold transition"
            >
              Clear Cart 🗑
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default CartPage;
