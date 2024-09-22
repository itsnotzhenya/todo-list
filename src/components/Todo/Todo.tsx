import { memo, useState } from 'react';
import { EditTodo } from '../EditTodo/EditTodo';
import { type TodoType } from '../../app/todoSlice';
import styles from './todo.module.css';
import commonStyles from '../../styles/common.module.css';

export const Todo = memo(
  ({
    todo,
    onCheck,
    onDelete,
  }: {
    todo: TodoType;
    onCheck: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, description: string) => void;
  }) => {
    const [editingId, setEditingId] = useState(0);

    const onCancel = () => {
      setEditingId(0);
    };

    return (
      <div className={styles.todo}>
        {editingId ? (
          <EditTodo
            todoId={todo.id}
            description={todo.description}
            stopEditing={onCancel}
            completed={todo.completed}
            onCheck={onCheck}
          />
        ) : (
          <>
            <div className={commonStyles.wrapper}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onCheck(todo.id)}
              />
              <p className={todo.completed ? styles.completed : undefined}>
                {todo.description}
              </p>
            </div>
            <div className={commonStyles.wrapper}>
              <button
                className={commonStyles.blueButton}
                onClick={() => setEditingId(todo.id)}>
                Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className={commonStyles.redButton}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
);
