import { configureStore } from '@reduxjs/toolkit';
import detailModal from '../modules/modalSlice';

const store = configureStore({
  reducer: { detailModal }
});

export default store;
