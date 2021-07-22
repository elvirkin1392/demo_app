import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

export const getModuleState = (state) => state.notes;

const ids = [shortid.generate(), shortid.generate()];
export const selectors = {};
const slice = createSlice({
  name: "notes",
  initialState: {
    [ids[0]]: {
      text: "text",
      title: "title",
      id: [ids[0]],
      description: "description",
      date: "20 apr 2021",
    },
    [ids[1]]: {
      text: "text2",
      title: "title2",
      id: [ids[1]],
      description: "description",
      date: "20 apr 2021",
    },
  },
  reducers: {},
});
export const actions = slice.actions;
export const reducer = slice.reducer;
