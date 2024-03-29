import { createSlice } from "@reduxjs/toolkit";
import { formatISO } from "date-fns";

export const getModuleState = (state) => state.notes;

// const ids = [shortid.generate(), shortid.generate()];
export const selectors = {};
const slice = createSlice({
  name: "notes",
  initialState: {
    1: {
      text: "text",
      title: "title",
      id: "1",
      description: "description",
      date: formatISO(new Date("December 17, 2020 03:24:00"), {
        representation: "date",
      }),
    },
    2: {
      text: "text2",
      title: "title2",
      id: "2",
      description: "description",
      date: formatISO(new Date("December 17, 2020 03:24:00"), {
        representation: "date",
      }),
    },
  },
  reducers: {
    setNote(state, { payload }) {
      const { id } = payload;
      state[id] = payload;
    },
  },
});
export const actions = slice.actions;
export const reducer = slice.reducer;
