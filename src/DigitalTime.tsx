import React, { FC, useState } from "react";

type DigitalTimeProps = {};

const DigitalTime: FC<DigitalTimeProps> = ()=>{
  
  const [ sec, setSec ] = useState('');
  const [ min, setMin ] = useState('');
  const [ houre, setHoure ] = useState('');
  
  const handleTimeInterval = ()=>{
    
  const h = new Date().getHours().toLocaleString();
    
  const m = new Date().getMinutes().toLocaleString();
    
  const s = new Date().getSeconds().toLocaleString();
    
  setHoure(h);
    setMin(m);
    setSec(s);
  }
  
 setInterval(handleTimeInterval, 1000)
  return(
    <div onChange={handleTimeInterval} className="text-4xl font-black   h-screen  flex justify-center items-center"><p className="border border-black px-4 py-2">{houre}: {min}: {sec}</p></div>
  )
}
export default DigitalTime;