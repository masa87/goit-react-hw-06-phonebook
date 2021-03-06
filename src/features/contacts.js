import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { initialContacts } from "../utils/localStorage";

const defaultState = {
  contacts: initialContacts,
  filter: "",
};

const slice = createSlice({
  name: "contacts",
  initialState: defaultState,
  reducers: {
    addContact: (state, { payload }) => {
      const id = nanoid();
      state.contacts.push({
        id,
        name: payload.name,
        number: payload.number,
      });
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = slice.actions;

export default slice.reducer;
