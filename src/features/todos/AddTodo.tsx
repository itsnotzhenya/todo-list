import { useState } from 'react';
import { addTodo } from '../../app/todoSlice';
import { useAppDispatch } from '../../app/store';
import styles from './todos.module.css';

export const AddTodo = () => {
  const [description, setDescription] = useState<string>('');
  const dispatch = useAppDispatch();

  const onAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(description));
    setDescription('');
  };

  return (
    <form onSubmit={onAddTodo} className={styles.form}>
      <input
        required
        type="text"
        name="description"
        placeholder="Add a new todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
