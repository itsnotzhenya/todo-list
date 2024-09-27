import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  selectFilteredTodos,
  toggleTodo,
  deleteTodo,
  setFilter,
  sortList,
} from '../../store/todoSlice';
import type { Filter } from '../../types';

export const useTodoList = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  const filteredTodos = useAppSelector(selectFilteredTodos);

  const onCheckTodo = useCallback(
    (id: number) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  const onDeleteTodo = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const onFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(e.currentTarget.value as Filter));
  };

  const move = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const draggedTodo = filteredTodos[dragIndex];
      const updatedTodos = [...filteredTodos];
      updatedTodos.splice(dragIndex, 1);
      updatedTodos.splice(hoverIndex, 0, draggedTodo);
      dispatch(sortList(updatedTodos));
    },
    [dispatch, filteredTodos]
  );

  return {
    filter,
    filteredTodos,
    onFilterChange,
    onCheckTodo,
    onDeleteTodo,
    move,
  };
};
