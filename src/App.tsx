import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { AddTodo } from './components/AddTodo/AddTodo';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <AddTodo />
      <DndProvider backend={HTML5Backend}>
        <TodoList />
      </DndProvider>
    </>
  );
}

export default App;
