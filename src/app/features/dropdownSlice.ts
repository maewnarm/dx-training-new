import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface DropdownState {
  //state
  value: string;
  line: string;
  count: number
}

const initialState: DropdownState = {
  value: "",
  line: "",
  count: 0
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    //function state
    setDropdownValue: (state, action: PayloadAction<string>) => {
      //function
      state.value = action.payload;
    },
    setLineValue: (state, action: PayloadAction<string>) => {
      state.line = action.payload;
    },
    setCount: (state,action:PayloadAction<number>) => {
      state.count = action.payload
    }
  },
});

// export actions (function)
export const { setDropdownValue, setLineValue,setCount } = dropdownSlice.actions;

// export variable
export const dropdownValue = (state: RootState) => state.dropdown.value;
export const lineValue = (state: RootState) => state.dropdown.line;
export const countValue = (state: RootState) => state.dropdown.count;

export default dropdownSlice.reducer;
