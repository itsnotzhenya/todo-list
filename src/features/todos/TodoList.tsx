import { deleteTodo, toggleTodo } from '../../app/todoSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../app/store';
import { Todo } from './Todo';
import styles from './todos.module.css';

export const TodoList = () => {
  const todos = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  const onCheckTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.list}>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onCheck={onCheckTodo}
            onDelete={onDeleteTodo}
          />
        ))}
    </div>
  );
};
