import { useState } from 'react';
import { useAppDispatch } from '../../app/store';
import { editTodo } from '../../app/todoSlice';
import commonStyles from '../../styles/common.module.css';

export const EditTodo = ({
  todoId,
  description,
  stopEditing,
  completed,
  onCheck,
}: {
  todoId: number;
  description: string;
  stopEditing: () => void;
  completed: boolean;
  onCheck: (id: number) => void;
}) => {
  const [editingDescription, setEditingDescription] = useState(description);
  const dispatch = useAppDispatch();

  const onEditTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editTodo({ id: todoId, description: editingDescription }));
    stopEditing();
  };

  return (
    <form onSubmit={onEditTodo} className={commonStyles.form}>
      <div className={commonStyles.wrapper}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onCheck(todoId)}
        />
        <input
          required
          type="text"
          name="description"
          value={editingDescription}
          onChange={(e) => setEditingDescription(e.target.value)}
        />
      </div>
      <div className={commonStyles.wrapper}>
        <button className={commonStyles.greenButton} type="submit">
          Ok
        </button>
        <button className={commonStyles.redButton} onClick={stopEditing}>
          Cancel
        </button>
      </div>
    </form>
  );
};
