import  { FC, InputHTMLAttributes } from "react";

type inputProps = InputHTMLAttributes<HTMLInputElement>

const Input:FC<inputProps> = ({className, ...rest})=>{
  return <input className={"border border-gray-500 hover:ring-blue-500 hover:bg-green-100 rounded-sm h-10 w-80 " + className} {...rest} type="number" />
}

export default Input;