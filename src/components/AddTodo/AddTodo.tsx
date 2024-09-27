import { useState } from 'react';
import { addTodo } from '../../store/todoSlice';
import { useAppDispatch } from '../../store/store';
import styles from './addTodo.module.css';

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
        className={styles.input}
        required
        type="text"
        name="description"
        placeholder="Add a new todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Add Todo
      </button>
    </form>
  );
};
