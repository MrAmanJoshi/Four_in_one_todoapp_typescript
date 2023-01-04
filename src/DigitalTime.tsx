import { FC, useState } from "react";
import Loading from "./Loading";

type DigitalTimeProps = {};

const DigitalTime: FC<DigitalTimeProps> = ()=>{
 
  const [loading, setLoading] = useState(true);
  const [time, setTime]= useState([''])
  
  const handleTimeInterval = ()=>{
  const H = new Date().getHours().toLocaleString();
  const M = new Date().getMinutes().toLocaleString();
  const S = new Date().getSeconds().toLocaleString();
    const clock = [H,M,S];
    setTime(clock);
    setLoading(false)
  }
  
 setInterval(handleTimeInterval, 1000)
  
  if(loading){
    return <Loading/>
  }
  
  return(
    <div onChange={handleTimeInterval} className="text-4xl font-black h-screen  flex justify-center items-center">
      <p className="border-2 border-black py-2 px-4 bg-gray-200 ">
  {time[0]}: {time[1]}: {time[2]}
      </p>
    </div>
  )
}
export default DigitalTime;