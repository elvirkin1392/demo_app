import {createSlice} from "@reduxjs/toolkit";
import {formatISO} from 'date-fns'

export const getModuleState = (state) => state.profile;

const slice = createSlice({
  name: "profile",
  initialState: {
    firstName: "John",
    secondName: null,
    birthdate: formatISO(new Date(), {representation: 'date'}),
    email: null,
    phone: null,
    image: null
  },
  reducers: {
    setProfile(state, {payload}) {
      const {
        firstName,
        secondName,
        birthdate,
        email,
        phone,
        image
      } = payload;
      
      return {
        firstName,
        secondName,
        birthdate,
        email,
        phone,
        image
      }
    },
    setName(state, {payload}) {
      const {username} = payload
      state.firstName = username;
    }
  },
});
export const actions = slice.actions;
export const reducer = slice.reducer;
