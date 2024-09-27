export type TodoProps = {
  index: number;
  todoId: number;
  description: string;
  completed: boolean;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
  move: (dragIndex: number, hoverIndex: number) => void;
};

export type TodoType = {
  description: string;
  completed: boolean;
  id: number;
};

export type Filter = 'all' | 'active' | 'completed';

export interface TodosState {
  todos: Array<TodoType>;
  filter: Filter;
}
