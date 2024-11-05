import { createSlice } from "@reduxjs/toolkit";
interface IModalState {
  modalVisible: Boolean,
  modalContent: string,
  modalDate: string
}
const initialState: IModalState = {
  modalVisible: false,
  modalContent: 'za eto ebut',
  modalDate: new Date().toISOString()

};
const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state, action) => {
      state.modalVisible = true;
      state.modalContent = action.payload.modalContent;
      state.modalDate = action.payload.modalDate;
    },
    modalClose: (state) => {
      state.modalVisible = false;
    },
  },
});
export const { modalOpen, modalClose } = modalReducer.actions;
export default modalReducer.reducer;