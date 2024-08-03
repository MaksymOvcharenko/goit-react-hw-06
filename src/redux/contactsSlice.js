import { createSlice } from "@reduxjs/toolkit";
// 1.
// const initialState = {
//   items: [{ id: 1, todo: "Learn Redux" }],
// };

// // 2.
// const slice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {
//     deleteTodo: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     addTodo: (state, action) => {
//       state.items.push(action.payload);
//     },
//   },
// });
// // 3.
// export const todosReducer = slice.reducer;
// export const { deleteTodo, addTodo } = slice.actions;

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const contactReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
