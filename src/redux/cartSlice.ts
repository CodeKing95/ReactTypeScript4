import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../components/ProductCard";

export type CartItem = Product & {
  quantity: number;
  totalPrice: number;
};

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const getFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : { items: [], totalQuantity: 0, totalPrice: 0 };
};

const saveToLocalStorage = (state: CartState) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const initialState: CartState = getFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const newItem = action.payload;
      const existingItem = state.items.find(i => i.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
         existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price, });
      }

      state.totalQuantity++;
     state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);

  localStorage.setItem("cart", JSON.stringify(state));
    },

  increaseQty(state, action: PayloadAction<number>) {
  const item = state.items.find(i => i.id === action.payload);
  if (!item) return;

  item.quantity++;
  item.totalPrice = item.quantity * item.price;

  state.totalQuantity++;
  state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);

  localStorage.setItem("cart", JSON.stringify(state));
},

decreaseQty(state, action: PayloadAction<number>) {
  const item = state.items.find(i => i.id === action.payload);
  if (!item) return;

  item.quantity--;
  if (item.quantity === 0) {
    state.items = state.items.filter(i => i.id !== item.id);
  } else {
    item.totalPrice = item.quantity * item.price;
  }

  state.totalQuantity--;
  state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);

  localStorage.setItem("cart", JSON.stringify(state));
},


 removeItem(state, action: PayloadAction<number>) {
  const item = state.items.find(i => i.id === action.payload);
  if (!item) return;

  state.items = state.items.filter(i => i.id !== item.id);

  state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
  state.totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);

  localStorage.setItem("cart", JSON.stringify(state));
},


    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveToLocalStorage(state);
    }
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
