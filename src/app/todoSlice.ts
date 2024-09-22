import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodoType {
  description: string;
  completed: boolean;
  id: number;
}
export type Filter = 'all' | 'active' | 'completed';
interface TodosState {
  todos: Array<TodoType>;
  filter: Filter;
}

const initialState: TodosState = {
  todos: [],
  filter: 'all',
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
    setFilter: (state: TodosState, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo, setFilter } =
  todoSlice.actions;
export const selectFilteredTodos = createSelector(
  (state) => state.todos,
  (state) => state.filter,
  (todos, filter) => {
    return todos.filter((todo: TodoType) => {
      const matches =
        filter === 'all' ||
        (filter === 'active' && !todo.completed) ||
        (filter === 'completed' && todo.completed);
      return matches;
    });
  }
);
export default todoSlice.reducer;
