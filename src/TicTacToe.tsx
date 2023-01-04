import { ChangeEvent, FC, useEffect, useState } from "react";
import Button from "./Button";
import Container from "./Container";

type TicTacToePropd = {};
type winnerState = string;
type playerState = string;

const TicTacToe: FC<TicTacToePropd> = ()=> {
  
  const initialValue: string[] = Array(9).fill("")
  
  const [gameState, setGameState] = useState(initialValue);
  const [move, setMove] = useState(0);
  const [winner, setWinner] = useState<winnerState>();
  
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [player1, setPlayer1] = useState<playerState>();
  const [player2, setPlayer2] = useState<playerState>()
  const [gamePage, setGamePage] = useState(false);

  const handlePlayer1 = (e: ChangeEvent<HTMLInputElement>)=>{
    setPlayer1(e.target.value)
  }
  const handlePlayer2 = (e: ChangeEvent<HTMLInputElement>)=>{
    setPlayer2(e.target.value)
  }
  
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
  
  setGameState(initialValue);
  
  if(gameState[a] === "X"){
    
setWinner(player1);  
  } else if(gameState[a] = "O"){
    setWinner(player2)
  }
} });
    
    if(winner === "X"){
      setScoreX( scoreX + 1)
    } else if (winner === "O"){
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
<>
      {gamePage === false && <div className="flex flex-col items-center mt-64">
        <p className="text-xl font-black mb-4">Enter player's name </p>
        <input value={player1} onChange={handlePlayer1} className="h-10 border border-blue-600 w-64"/>
          <input value={player2} onChange={handlePlayer2} className="h-10 border border-blue-600 w-64 mt-2 mb-5"/>
        <Button disabled={player2 == undefined} onClick={()=>(setGamePage(true))}> Let's Play</Button>
        </div>
      }
  {gamePage == true && <div className="flex flex-col justify-center items-center h-full">
      
      { winner !== undefined && <div className="text-center flex flex-col justify-center items-center mt-64">
        
      <p className="text-2xl text-blue-700 font-bold mb-5 "> {winner} won this round </p>
        
<button onClick={()=>{setWinner(undefined), setMove(0)}} className="px-3 py-1 text-sm font-medium border border-gray-400 bg-gray-300">Re-Play</button>
      </div> }
      
      { !winner && move < 9 &&   <div className="mt-8 mb-8 sm:mt-16">
        <p className="text-xl font-black text-gray-800 text-center mb-4"> Score Bord </p>
        <div className="mb-24 mt-4 flex justify-around">
      <p className={"text-lg mr-4 font-medium border-b-2 " + playX }>{player1}: <span className="text-red-500"> {scoreX}</span> </p>
      <p className={"text-lg mr-4  font-medium border-b-2 " + play0 } >{player2}:<span className="text-red-500">{scoreO}</span> </p>
      </div>
      
    <div className="grid grid-col-3 justify-center border border-blue-500">
      <div className="flex grid grid-cols-3 ">
        {Array(9).fill("").map((E,  index)=>{
      return(
        <div key={index} className="border border-blue-500">
        <Container index={index} gameValue={gameState[index]} handleClick={handleClick} />
          </div>
      )
        })}
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
    </div>}
  
  </>)
}  

export default TicTacToe;