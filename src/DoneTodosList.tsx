import {FC} from "react";
import { TiDelete } from 'react-icons/ti';

type todoObj = {title: string, id: string, done: boolean}

type DoneTodosListProps = {
  cmpltTodos: todoObj,
  onChange: (cmpltTodos: todoObj)=>void,
  onSelect: ( cmpltTodos: todoObj)=>void
}

const DoneTodosList: FC<DoneTodosListProps> = ({cmpltTodos, onChange, onSelect})=> {
  
  return ( <div> 
  <div className="flex w-full">
     
          <input onClick={()=>onChange(cmpltTodos)} checked= {true}  type='checkbox'  
         className=""/> 
          
        <p className="text-red-400">{cmpltTodos.title}</p>
          
          <p className="pl-10 pr-auto"><TiDelete className='text-3xl bg-white ' onClick={()=>onSelect(cmpltTodos)}/></p>
          
          
      </div> 
    </div>)
}

export default DoneTodosList;
