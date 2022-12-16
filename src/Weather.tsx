import axios from "axios";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import {TiWeatherPartlySunny} from "react-icons/ti"
import Loading from "./Loading";


type WeatherProps = {};
type searchCityType = string
type resultType = {
     name: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
        sea_level: number,
        grnd_level: number
    };
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
  } 


const Weather: FC<WeatherProps>= ()=>{
  const [searchCity, setsearchCity] = useState<searchCityType>();
  const [result, setresult] = useState<resultType>();
  const [loading, setLoading]= useState(true)
  
const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=9187ad36b0e19b166be7210044ad34ab`

useEffect(()=>{
  axios.get(url).then((response)=>{
    setresult(response.data)
    
    console.log("result",result)
    setLoading(false)
  }).catch(()=>{
    console.log("error aa gya")
    
    setLoading(false)
  })
  
},[searchCity])

  
  return(<div className="">
    
  <div className="bg-blue-700 h-screen w-full object-cover h-screen">
      <div className="flex flex-col items-center">
        <p className="text-5xl mt-2 font-bold text-white sm:text-4xl text-center"> Weather </p>
        <input className="h-10 w-64 border-2 border-blue-600 mt-10"  
value={searchCity} type='result' onChange={(e: ChangeEvent<HTMLInputElement>)=>{
    setsearchCity(e.target.value)
        }} placeholder="Enter City name..."/>
        
    { result == undefined && <div className="text-xl mt-10 text-orange-400 font-medium text-center">Enter city name and View today's temperature </div>}
        
        { loading == true && <div><Loading/></div> }
       
        
     { result != undefined && <div className="">
       <p className="text-6xl mt-20 flex justify-center text-center font-medium text-white">
        <TiWeatherPartlySunny/>
      </p>
       
      <p className="text-3xl text-white font-medium underline text-center underline-offset-8">{result?.name}</p>
       
      <div className="flex mt-5 justify-center"> 
      <p className="text-xl text-white font-bold">Min: {result?.main.temp_min}<span className="text-orange-400 ">°Cel</span> | Max: {result?.main.temp_max}<span className="text-orange-400 ">°Cel</span> </p>
        </div>
       
       <div className="flex justify-center">
       <p className="text-xl text-white font-bold">Feel like: {result?.main.feels_like}<span className="text-orange-400 ">°Cel</span> </p>
       </div>
       <div className="flex justify-center"> 
      <p className="text-xl text-white font-bold">Wind speed:  {result?.wind.speed}<span className="text-orange-400 "> m/sec</span> | humidity: {result?.main.humidity}<span className="text-orange-400 ">%</span> </p>
        </div>
       
        
        <p className="text-7xl mt-12 font-bold text-white text-center ">{result?.main.temp}<span className="text-orange-400 ">°Cel</span></p>
         </div>}
        
      </div> 
       </div>
    </div>
  )
}

export default Weather;