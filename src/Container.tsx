import {  FC, ButtonHTMLAttributes, memo } from "react";

type ContainerProps = {
gameValue: string;
  index: number;
  handleClick: (index: number)=> void;
className?: string,
  
} & ButtonHTMLAttributes<HTMLButtonElement> 


const Container:FC<ContainerProps> = ({className, gameValue, handleClick, index, ...rest})=>{
  return (
    <button onClick={()=>(handleClick(index))} className={"px-6 text-center  py-4 h-20 w-24 text-2xl font-bold hover:bg-blue-50 text-green-600 " + className }  {...rest}> 
      {gameValue}
    </button>
  )
}

export default memo(Container);