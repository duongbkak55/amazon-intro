import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        state.items = [...state.items,action.payload];
    },
    removeFromBasket: (state, action) => {
        state.items.filter((item) => item.id !== action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

// selector
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer