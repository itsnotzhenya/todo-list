import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoType {
  description: string;
  completed: boolean;
  id: number;
}

interface TodosState {
  todos: Array<TodoType>;
}

const initialState: TodosState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state: TodosState, action: PayloadAction<string>) => {
      state.todos.push({
        description: action.payload,
        completed: false,
        id: Date.now(),
      });
    },
    deleteTodo: (state: TodosState, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state: TodosState, action: PayloadAction<number>) => {
      const todo = state.todos.find(
        (todo: TodoType) => todo.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (
      state: TodosState,
      action: PayloadAction<{ id: number; description: string }>
    ) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      // state.todos[todoIndex] = action.payload.description;
      if (todo) {
        state.todos[todoIndex] = {
          id: action.payload.id,
          completed: todo?.completed,
          description: action.payload.description,
        };
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
