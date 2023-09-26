const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    setFilter: {
      reducer: (_, action) => action.payload,
      prepare: value => ({
        payload: {
          value,
        },
      }),
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
