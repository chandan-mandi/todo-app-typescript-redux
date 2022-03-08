import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo } from "../../modal";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
      todos: [],
      error: null,
    },
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            console.log(action)
            // state.todos.push(action.payload)
        },
        // addTodo : (state, action: PayloadAction<Todo>) => state + action.payload,
    },
    
  })
  usersSlice.actions.addTodo({
    id: 5465465,
    todo: "string",
    isDone : true
  })
  export const {addTodo} = usersSlice.actions;

  export default usersSlice.reducer;