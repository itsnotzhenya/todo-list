import { memo } from 'react';
import styles from './todo.module.css';
import { EditTodo } from '../EditTodo/EditTodo';
import { useTodo } from './useTodo';

type TodoProps = {
  index: number;
  todoId: number;
  description: string;
  completed: boolean;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
  move: (dragIndex: number, hoverIndex: number) => void;
};

export const Todo = memo(
  ({
    index,
    todoId,
    description,
    completed,
    onCheck,
    onDelete,
    move,
  }: TodoProps) => {
    const { ref, editingId, setEditingId, onCancel, drop, drag, isDragging } =
      useTodo(todoId, index, move);

    drag(drop(ref));

    return (
      <div
        ref={ref}
        className={styles.todo}
        style={{ opacity: isDragging ? 0 : 1 }}>
        {editingId ? (
          <EditTodo
            todoId={todoId}
            description={description}
            stopEditing={onCancel}
            completed={completed}
            onCheck={() => onCheck(todoId)}
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
