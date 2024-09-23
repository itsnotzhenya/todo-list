import { useCallback } from 'react';
import {
  deleteTodo,
  toggleTodo,
  setFilter,
  selectFilteredTodos,
  TodoType,
  Filter,
} from '../../app/todoSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../app/store';
import { Todo } from '../Todo/Todo';
import styles from './todolist.module.css';

export const TodoList = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  const filteredTodos = useAppSelector((state: RootState) =>
    selectFilteredTodos(state)
  );

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

  return (
    <div className={styles.list}>
      <select
        className={styles.select}
        value={filter}
        onChange={onFilterChange}>
        <option value={'all'}>All</option>
        <option value={'active'}>Active</option>
        <option value={'completed'}>Completed</option>
      </select>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo: TodoType) => (
          <Todo
            key={todo.id}
            todoId={todo.id}
            description={todo.description}
            completed={todo.completed}
            onCheck={onCheckTodo}
            onDelete={onDeleteTodo}
          />
        ))
      ) : (
        <p className={styles.notFound}>
          {filter === 'all' ? 'Not todos' : `Not ${filter} todos`}
        </p>
      )}
    </div>
  );
};
