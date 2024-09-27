import { useTodoList } from './useTodoList';
import { Todo } from '../Todo/Todo';
import styles from './todolist.module.css';

export const TodoList = () => {
  const {
    filter,
    filteredTodos,
    onFilterChange,
    onCheckTodo,
    onDeleteTodo,
    move,
  } = useTodoList();

  return (
    <div className={styles.list}>
      <select
        className={styles.select}
        value={filter}
        onChange={onFilterChange}>
        <option value={'all'}>All</option>
        <option value={'active'}>Active</option>
        <option value={'completed'}>Completed</option>
      </select>
      <div>
        {filteredTodos.length > 0 ? (
          filteredTodos.map(
            (todo, index) =>
              todo && (
                <Todo
                  key={todo.id}
                  index={index}
                  move={move}
                  todoId={todo.id}
                  description={todo.description}
                  completed={todo.completed}
                  onCheck={onCheckTodo}
                  onDelete={onDeleteTodo}
                />
              )
          )
        ) : (
          <p className={styles.notFound}>
            {filter === 'all' ? 'Not todos' : `Not ${filter} todos`}
          </p>
        )}
      </div>
    </div>
  );
};
