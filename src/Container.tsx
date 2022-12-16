import {  FC, ButtonHTMLAttributes } from "react";

type ContainerProps = {
gameValue: string;
  onClick: (index: number)=> void;
className?: string,
  
} & ButtonHTMLAttributes<HTMLButtonElement> 


const Container:FC<ContainerProps> = ({className, gameValue, ...rest})=>{
  return (
    <button className={"px-6 text-center  py-4 h-20 w-24 text-2xl font-bold hover:bg-blue-50 text-green-600 " + className }  {...rest}> 
      {gameValue}
    </button>
  )
}

export default Container;