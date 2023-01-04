import { ChangeEvent, FC,  useEffect, useState } from "react";
import Input from "./Input";

type UnitConvaterPageProps = {};
type UnitStateType = string | number

const UnitConvaterPage: FC<UnitConvaterPageProps> = ()=>{
  
const [feet, setFeet] = useState<UnitStateType>("");
  const [meter, setMeter]= useState<UnitStateType>("");
  const [km, setKm] = useState<UnitStateType>("");
  const [cm, setCm] = useState<UnitStateType>("");
  const [inch, setInch] = useState<UnitStateType>("");
  const [inputId, setinputId] = useState("0")
  
const FeetChange = (e: ChangeEvent<HTMLInputElement> )=>{
  setFeet(e.target.value)
  setinputId(e.target.id)
};
  const meterChange = (e: ChangeEvent<HTMLInputElement> )=>{
  setMeter(e.target.value);
    setinputId(e.target.id);
};
  const kilometerChange = (e: ChangeEvent<HTMLInputElement> )=>{
  setKm(e.target.value);
    setinputId(e.target.id);
};
  const centimeterChange = (e: ChangeEvent<HTMLInputElement> )=>{
  setCm(e.target.value);
    setinputId(e.target.id);
};
  
  const inchesChange = (e: ChangeEvent<HTMLInputElement> )=>{
  setInch(e.target.value);
    setinputId(e.target.id);
};

  useEffect(()=>{
    if(inputId === "1" ){
    const ft = +feet;
    const m = ft/3.2808;
    const kilo = ft/3280.8;
    const cm = ft/0.032808;
    const i = ft*12;
    setMeter(m);
    setKm(kilo);
    setCm(cm);   
    setInch(i);
    }
    else if(inputId === "2"){
    const m = +meter;
    const ft = m*3.2808;
    const kilo = m/1000;
    const cm = m/0.01;
    const i = m*39.370
    setFeet(ft)
    setKm(kilo);
    setCm(cm);   
    setInch(i);
    }
    else if (inputId === "3"){
    const k = +km;
    const ft= k * 3280.8
    const m = k*1000;
    const cm = k*100000;
    const i = k*39370;
    setInch(i)
    setFeet(ft)
    setMeter(m);
    setCm(cm);    
    }
    else if( inputId === "4"){
      
    const c = +cm;
    const ft= c*0.032808;
    const m = c/100;
    const km = c/100000;
    const i = c*0.39370;
    setFeet(ft);
    setMeter(m);
    setKm(km);   
    setInch(i);
    }
    else if(inputId === "5"){
      const i = +inch;
      const ft = i*0.083333;
      const m = i/39.370;
      const km = i/39370;
      const cm = i/0.39370;
      
    setFeet(ft);
    setMeter(m);
    setKm(km);   
    setCm(cm)
      
    }
  },[feet, meter, km, cm, inch]);
  
  return (
    <div className="flex flex-col items-center border border-blue-700 bg-sky-500 h-screen "> 
      <h1 className="text-3xl text-white font-bold mt-5 ">Length converter</h1>
      <p className="text-lg font-medium mt-16 text-white">Feets</p>
    <Input id="1" value={feet} onChange={FeetChange} placeholder="Feets"/>
      <p  className="text-lg font-medium text-white mt-3">Meters</p>
    <Input id="2" value={meter} onChange={meterChange} placeholder="meters"/>
      <p className="text-lg font-medium text-white mt-3">Kilometers</p>
    <Input id="3" value={km} onChange={kilometerChange} placeholder="Kilometers"/>
      <p className="text-lg font-medium text-white mt-3">Centimeters</p>
    <Input id="4" value={cm} onChange={centimeterChange} placeholder="Centimeters"/>
      
      <p className="text-lg font-medium text-white mt-3">Inches</p>
    <Input id="5" value={inch} onChange={inchesChange} placeholder="Inches"/>
      
    </div>
  )
}

export default UnitConvaterPage;