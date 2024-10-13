import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Product } from "../../types/Product";

// Define a type for the slice state
export interface BasketState {
  products: Product[];
}

// Define the initial state using that type
const initialState: BasketState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex >= 0) {
        state.products[productIndex].amount! += 1;
        state.products[productIndex].totalPrice! =
          state.products[productIndex].amount! *
          state.products[productIndex].price;
      } else {
        const totalPrice = action.payload.price;
        const tempProduct = {
          ...action.payload,
          amount: 1,
          totalPrice: totalPrice,
        };

        state.products.push(tempProduct);
      }
    },
    remove: (state, action: PayloadAction<Product["id"]>) => {
      const itemId = action.payload;
      state.products = state.products.filter((elem) => elem.id !== itemId);
    },
    decreaseAmount: (state, action: PayloadAction<Product>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.products[productIndex].amount! > 1) {
        state.products[productIndex].amount! -= 1;
        state.products[productIndex].totalPrice! -=
          state.products[productIndex].price;
      } else if (state.products[productIndex].amount === 1) {
        const itemId = action.payload.id;
        state.products = state.products.filter((elem) => elem.id !== itemId);
      }
    },
  },
});

export const { add, remove, decreaseAmount } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => {
  const totalAmount = state.basket.products.reduce(
    (acc, curr) => acc + curr.amount!,
    0
  );
  return totalAmount;
};

export default basketSlice.reducer;
