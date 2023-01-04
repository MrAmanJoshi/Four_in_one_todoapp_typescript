import {FC, memo} from "react"
import { Link } from "react-router-dom";

const Header: FC = () => {
  
  return (
    <div className="py-4 pl-3 border border-gray-200 text-xl font-medium flex 
 justify-between ">
   <Link to="/"> <h1 className="text-yellow-500 hover:text-blue-800 text-sm sm:text-xl">XTodo</h1></Link>
      <Link to="/weather" className="hover:text-blue-800 text-sm sm:text-xl"><p>Weather</p></Link>
      <Link to="/clock" className="hover:text-blue-800 text-sm sm:text-xl"><p>Clock</p></Link>
      <Link to="/TicTacToeCopy" className="hover:text-blue-800 text-sm sm:text-xl text-sm sm:text-xl "><p>Tic Tac Toe</p></Link>
      <Link to="/unitConvater" className="hover:text-blue-800 text-sm sm:text-xl mr-2"><p>Length Convater</p></Link>
    </div>
  )
}

export default memo(Header);