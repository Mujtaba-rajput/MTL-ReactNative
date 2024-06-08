import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPResponse} from './types';

interface SelectedDataState {
  ipData: IPResponse | null;
  selectedImage: string | null | any;
}

const initialState: SelectedDataState = {
  ipData: null,
  selectedImage: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setIPData(state, action: PayloadAction<IPResponse>) {
      state.ipData = action.payload;
    },
    setSelectedImage(state, action: PayloadAction<string>) {
      state.selectedImage = action.payload;
    },
  },
});

export const {setIPData, setSelectedImage} = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
