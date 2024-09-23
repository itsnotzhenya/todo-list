import { TodoList } from '../TodoList/TodoList';
import { AddTodo } from '../AddTodo/AddTodo';
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
