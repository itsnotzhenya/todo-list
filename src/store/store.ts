import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import todosReducer from './todoSlice';

const debouncedSaveToLocalStorage = debounce((todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, 800);

const localeStorageMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    const result = next(action);
    const state: RootState = storeAPI.getState();

    debouncedSaveToLocalStorage(state.todos);

    return result;
  };

export const store = configureStore({
  reducer: todosReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localeStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
