import { TodoList } from './components/TodoList/TodoList';
import { AddTodo } from './components/AddTodo/AddTodo';
import './styles/App.css';

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
