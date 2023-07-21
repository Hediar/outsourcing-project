import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detailModalData: [],
  detailModalOn: false,
  weatherModalOn: false
};

const detailModalSlice = createSlice({
  name: 'detailModal',
  initialState,
  reducers: {
    setDetailModalData: (state, action) => {
      state.detailModalData = action.payload;
    },
    setDetailModalOn: (state, action) => {
      state.detailModalOn = action.payload;
    },
    setWeatherModalOn: (state, action) => {
      state.weatherModalOn = action.payload;
    }
  }
});

export default detailModalSlice.reducer;
export const { setDetailModalData, setDetailModalOn, setWeatherModalOn } = detailModalSlice.actions;
