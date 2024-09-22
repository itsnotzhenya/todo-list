import {
  deleteTodo,
  editTodo,
  toggleTodo,
  setFilter,
  selectFilteredTodos,
  TodoType,
} from '../../app/todoSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../app/store';
import { Todo } from '../Todo/Todo';
import styles from './todolist.module.css';
import commonStyles from '../../styles/common.module.css';

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

  return (
    <>
      <div className={`${commonStyles.wrapper}  ${styles.filters}`}>
        <button
          onClick={() => dispatch(setFilter('all'))}
          className={`${styles.filterButton} ${
            filter === 'all' && styles.active
          }`}>
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('active'))}
          className={`${styles.filterButton} ${
            filter === 'active' && styles.active
          }`}>
          Active
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          className={`${styles.filterButton} ${
            filter === 'completed' && styles.active
          }`}>
          Completed
        </button>
      </div>
      <div className={styles.list}>
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
          <div className={commonStyles.wrapper}>
            <p>{filter === 'all' ? 'Not todos' : `Not ${filter} todos`}</p>
          </div>
        )}
      </div>
    </>
  );
};
