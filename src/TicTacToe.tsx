import { FC, useEffect, useState } from "react";
import Container from "./Container";

type TicTactoePropd = {};
type winnerState = string

const TicTacToe: FC<TicTactoePropd> = ()=> {
  
  const initialValue = ["", "", "", "", "", "", "","", "",];
  
  const [gameState, setGameState] = useState(initialValue);
  const [move, setMove] = useState(0);
  const [winner, setWinner] = useState<winnerState>();
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  
 console.log('winner', winner)
  const handleClick = (index: number)=>{
    if(gameState[index] == ""){
     
    let newGameState = [...gameState]; 
    newGameState[index] = (move % 2 === 0 ? "X": "O");
    setGameState(newGameState);
    setMove(move + 1)
    }
  }
  useEffect(()=>{
    WhoWillWinner(gameState)
  },[gameState])
  
  const WhoWillWinner = (gameState: string[])=>{
   
 const c = [
   [0,1,2], 
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [0,4,8]
 ] 

   c.forEach(i => {
     const [a,b,c] = i;
     
if(gameState[a] && gameState[a] == gameState[b] && gameState[b] == gameState[c]){
setWinner(gameState[a]);  
  setGameState(initialValue);
}
   });
    
    if(winner === "X"){
      setScoreX( scoreX + 1)
    }
    if(winner === "O"){
  setScoreO(scoreO + 1)      
    }
  }

  let playX = "border-gray-500 text-gray-600";
  let play0 = "border-gray-500 text-gray-600";
  
  if( move % 2 === 0 ){
     playX = " border-green-600 text-blue-600";
  }else {
    play0 = "border-green-600 text-blue-600"
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      
      { winner !== undefined && <div className="text-center flex flex-col justify-center items-center mt-64">
      <p className="text-2xl text-blue-700 font-bold mb-5 "> Player {winner} is win this game </p>
        
<button onClick={()=>{setWinner(undefined), setMove(0)}} className="px-3 py-1 text-sm font-medium border border-gray-400 bg-gray-300">Re-Play</button>
      </div> }
      
      
      { !winner && move < 9 &&   <div className="mt-8 mb-8 sm:mt-16">
        <p className="text-xl font-black text-gray-800 text-center mb-4"> Score Bord </p>
        <div className="mb-24 mt-4 flex justify-around">
      <p className={"text-lg mr-4 font-medium border-b-2 " + playX }>Player X: <span className="text-red-500"> {scoreX}</span> </p>
      <p className={"text-lg mr-4  font-medium border-b-2 " + play0 } >Player O:    <span className="text-red-500">{scoreO}</span> </p>
      </div>
      
    <div className="grid grid-col-3 justify-center">
      <div className="flex border-b-2 border-blue-400">
      <Container gameValue={gameState[0]} onClick={()=>( handleClick(0))} />
        <Container onClick={()=>(handleClick(1))} gameValue={gameState[1]} className="border-x-2 border-blue-400" />
        <Container onClick={()=>(handleClick(2))} gameValue={gameState[2]} />
      </div>
      <div className="flex border-b-2 border-blue-400">
      <Container gameValue={gameState[3]}   onClick={()=>(handleClick(3))} />
        <Container gameValue={gameState[4]} className="border-x-2 border-blue-400"  onClick={()=>(handleClick(4))}/>
        <Container gameValue={gameState[5]}  onClick={()=>(handleClick(5))}/>
      </div>
      <div className="flex">
      <Container gameValue={gameState[6]}  onClick={()=>(handleClick(6))}/>
        <Container gameValue={gameState[7]}  onClick={()=>(handleClick(7))} className="border-x-2 border-blue-400"/>
        <Container gameValue={gameState[8]}  onClick={()=>(handleClick(8))} />
      </div>
    </div>
      
<div className="mt-5 sm:mt-10">
</div>
        
</div>    
    }
      { move > 8 && winner === undefined &&  <div className=" flex justify-center items-center mt-64 ">
        <p className="text-red-400 text-xl font-bold mb-5 ">Mach drow! Play again   </p>
        </div>
      }
      
  {  winner === undefined && <div>
<button onClick={()=>{setGameState(initialValue), setMove(0)}} className="px-3 py-1 text-sm font-medium border border-gray-400 bg-gray-300">Re-Start</button>
   </div>}
    </div>
  
  )
}  

export default TicTacToe;