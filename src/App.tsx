import { TodoList } from './features/todos/TodoList';
import { AddTodo } from './features/todos/AddTodo';
import './App.css';

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
