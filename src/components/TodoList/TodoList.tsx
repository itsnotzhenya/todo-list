import { deleteTodo, editTodo, toggleTodo } from '../../app/todoSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../app/store';
import { Todo } from '../Todo/Todo';
import styles from './todolist.module.css';

export const TodoList = () => {
  const todos = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

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
    <div className={styles.list}>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onCheck={onCheckTodo}
            onDelete={onDeleteTodo}
            onEdit={onEditTodo}
          />
        ))}
    </div>
  );
};
