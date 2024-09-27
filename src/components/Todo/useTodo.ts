import { useRef, useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';

interface DragItem {
  index: number;
  id: string;
  type: string;
}
export const useTodo = (
  id: number,
  index: number,
  move: (id: number, index: number) => void
) => {
  const ref = useRef(null);
  const [editingId, setEditingId] = useState(0);

  const onCancel = () => {
    setEditingId(0);
  };
  const [, drop] = useDrop<
    DragItem,
    void,
    { handlerId: string | symbol | null }
  >({
    accept: 'todo',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      move(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'todo',
    item: () => ({
      id: id,
      index: index,
    }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return {
    ref,
    editingId,
    setEditingId,
    onCancel,
    drop,
    drag,
    isDragging,
  };
};
