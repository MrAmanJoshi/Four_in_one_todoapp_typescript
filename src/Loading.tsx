import React,{ PureComponent} from "react"
import {AiOutlineLoading3Quarters} from "react-icons/ai"


 type LoadingProps = {
   
 }

class Loading extends PureComponent<LoadingProps>{
  
  render(): React.ReactNode{ 
  return ( <div className= " text-white  text-4xl flex flex-col items-center justify-center h-64 font-medium  ">
< AiOutlineLoading3Quarters className="animate-spin"/></div>
  )
  }}

export default Loading;