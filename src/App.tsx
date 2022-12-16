import TodosPage from "./TodosPage"
import Header from "./Header"
import DigitalTime from "./DigitalTime"
import Weather from "./Weather"
import TicTacToe from "./TicTacToe"
import { Route, Routes } from "react-router"
import { BrowserRouter} from 'react-router-dom';  

  function App() {

  return (
    <BrowserRouter>
        <>
      <Header/>
      <Routes>
       
        
        <Route path="/" element={
      <TodosPage/>}></Route>
        
        <Route path="/weather" element={
      <Weather/>}></Route>
        
        <Route path="/tictactoe" element={
      <TicTacToe />}></Route>
        
        <Route path="/clock" element={
      <DigitalTime/>}></Route>
        
      </Routes>
        
    </>
      </BrowserRouter>
  )
}

export default App;

/*

 
       

      
*/