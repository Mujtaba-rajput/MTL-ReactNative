import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface MarketDataState {
  price: number | null;
  error: string | null;
}

const initialState: MarketDataState = {
  price: null,
  error: null,
};

const marketSlice = createSlice({
  name: 'marketData',
  initialState,
  reducers: {
    setMarketData(state, action: PayloadAction<number>) {
      state.price = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const {setMarketData, setError} = marketSlice.actions;
export const marketReducer = marketSlice.reducer;
