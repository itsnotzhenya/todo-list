import {
  deleteTodo,
  editTodo,
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

  const onCheckTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const onEditTodo = (id: number, description: string) => {
    dispatch(editTodo({ id, description }));
  };

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
            todo={todo}
            onCheck={onCheckTodo}
            onDelete={onDeleteTodo}
            onEdit={onEditTodo}
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
