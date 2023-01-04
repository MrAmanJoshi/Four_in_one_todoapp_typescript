import  { ButtonHTMLAttributes, FC, memo } from "react";

type ButtonProps={ 
  theme?: "primery" | "secondary" } & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({className, theme, ...rest})=>{
  
  let themeClass = " bg-yellow-400 text-white hover:bg-yellow-500 hover:ring-1 hover:ring-yellow-600 ring-2 ring-yellow-400 rounded-lg "

  if(theme == "secondary"){
   themeClass =  " bg-green-400 text-white hover:bg-green-500 hover:ring-1 hover:ring-yellow-600 ring-2 ring-yellow-400 rounded-lg "
  }
  return (
    
    <button  className= {   " px-4 py-2 " + className + " " + themeClass }  {...rest} ></button>
  )
}

Button.defaultProps={
  theme: "primery"
}

export default memo(Button);