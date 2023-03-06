import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    nextId: 2,
    data: {
      1: {
        content: "Wash the dishes",
        completed: false,
      },
    },
  },
  //   reducers
  reducers: {
    // adds new todo
    add: (state, action) => {
      const id = action.payload.nextId - 1;
      state.nextId = action.payload.nextId;
      state.data[id] = action.payload.obj;
    },
    // deletes todo
    deleteTodo: (state, action) => {
      const id = action.payload;
      delete state.data[id];
    },
    // edits todo
    edit: (state, action) => {
      const newTodo = prompt("Enter your edited todo here");
      const id = action.payload;
      state.data[id].content = newTodo;
    },
    // marks todo as complete
    complete: (state, action) => {
      const id = action.payload.id;
      const complete = action.payload.complete;
      state.data[id].completed = !complete;
    },
  },
});

export const { add, deleteTodo, edit, complete } = todoSlice.actions;

export default todoSlice.reducer;
