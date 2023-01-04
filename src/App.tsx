import TodosPage from "./TodosPage"
import Header from "./Header"
import DigitalTime from "./DigitalTime"
import Weather from "./Weather"
import { Route, Routes } from "react-router"
import TicTacToe from "./TicTacToe"
import UnitConvaterPage from "./UnitConvaterPage"

  function App() {


  return (
        <>
          
           <Header/>
      <Routes>
        
        <Route path="/" element={
      <TodosPage/>}></Route>
        
        <Route path="/weather" element={
      <Weather/>}></Route>
        
        <Route path="/TicTacToeCopy" element={
      <TicTacToe/>}></Route>
        
        <Route path="/clock" element={
      <DigitalTime/>}></Route>
        <Route path="/unitConvater" element={
      <UnitConvaterPage/>}></Route>
        
      </Routes>

    </>
  )
}

export default App;

/*

 
       
     
      
*/