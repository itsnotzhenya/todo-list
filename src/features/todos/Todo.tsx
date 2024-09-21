import { memo } from 'react';
import { type TodoType } from '../../app/todoSlice';
import styles from './todos.module.css';

export const Todo = memo(
  ({
    todo,
    onCheck,
    onDelete,
  }: {
    todo: TodoType;
    onCheck: (id: number) => void;
    onDelete: (id: number) => void;
  }) => {
    return (
      <div className={styles.row}>
        <div className={styles.row}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onCheck(todo.id)}
          />
          <p className={todo.completed ? styles.completed : undefined}>
            {todo.description}
          </p>
        </div>
        <button onClick={() => onDelete(todo.id)} className={styles.deleteBtn}>
          Delete
        </button>
      </div>
    );
  }
);
