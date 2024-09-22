import { useState } from 'react';
import { addTodo } from '../../app/todoSlice';
import { useAppDispatch } from '../../app/store';
import commonStyles from '../../styles/common.module.css';

export const AddTodo = () => {
  const [description, setDescription] = useState<string>('');
  const dispatch = useAppDispatch();

  const onAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(description));
    setDescription('');
  };

  return (
    <form onSubmit={onAddTodo} className={commonStyles.form}>
      <input
        className={commonStyles.addInput}
        required
        type="text"
        name="description"
        placeholder="Add a new todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className={commonStyles.blueButton}>
        Add Todo
      </button>
    </form>
  );
};
