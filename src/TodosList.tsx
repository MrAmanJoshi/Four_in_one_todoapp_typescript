import { FC } from "react";
import { TiDelete } from 'react-icons/ti';

type todoObj = { title: string, id: string, done: boolean }

type TodosListProps = {
  uDTodo: todoObj, onChange: (uDTodo: todoObj) => void,
  onSelect: (uDTodo: todoObj) => void
}

const TodosList: FC<TodosListProps> = ({ uDTodo, onChange, onSelect }) => {
  

  return (<div>
    <div className="flex w-full">

      <input onClick={() => (onChange(uDTodo))} type='checkbox'
        className="" />

      <p className="text-red-400">{uDTodo.title}</p>

      <p className="pl-10 pr-auto"><TiDelete className='text-3xl bg-white ' onClick={() => onSelect(uDTodo)} /></p>

    </div>
  </div>)
}

export default TodosList;

