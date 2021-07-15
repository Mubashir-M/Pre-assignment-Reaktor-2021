
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState:  {
    text: "",
  },

  reducers: {
    searchUpdate: (state, action) => {
      state.text = action.payload;
    },
    searchEmpty: (state) => {
      state.text ="";
    }
  },
  
});

export const { searchUpdate, searchEmpty } = searchSlice.actions;

export const selectText = (state) => state.search.text;
export default searchSlice.reducer;