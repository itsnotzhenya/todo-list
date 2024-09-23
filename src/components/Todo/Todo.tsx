import { memo, useState } from 'react';
import { EditTodo } from '../EditTodo/EditTodo';
import styles from './todo.module.css';

export const Todo = memo(
  ({
    todoId,
    description,
    completed,
    onCheck,
    onDelete,
  }: {
    todoId: number;
    description: string;
    completed: boolean;
    onCheck: (id: number) => void;
    onDelete: (id: number) => void;
  }) => {
    const [editingId, setEditingId] = useState(0);

    const onCancel = () => {
      setEditingId(0);
    };

    return (
      <div className={styles.todo}>
        {editingId ? (
          <EditTodo
            todoId={todoId}
            description={description}
            stopEditing={onCancel}
            completed={completed}
            onCheck={onCheck}
          />
        ) : (
          <>
            <div className={styles.wrapper}>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => onCheck(todoId)}
              />
              <p className={completed ? styles.completed : undefined}>
                {description}
              </p>
            </div>
            <div className={styles.wrapper}>
              <button
                className={styles.blueButton}
                onClick={() => setEditingId(todoId)}>
                Edit
              </button>
              <button
                onClick={() => onDelete(todoId)}
                className={styles.redButton}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
);
