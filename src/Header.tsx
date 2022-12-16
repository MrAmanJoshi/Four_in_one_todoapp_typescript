import {FC} from "react"
import { Link } from "react-router-dom";

const Header: FC = () => {
  
  return (
    <div className="pl-3 py-4 border border-gray-200 text-xl font-medium flex justify-between ">
   <Link to="/"> <h1 className="text-yellow-500 hover:text-blue-800">XTodo</h1></Link>
      <Link to="/weather" className="hover:text-blue-800 text-lg"><p>Weather</p></Link>
      <Link to="/clock" className="hover:text-blue-800 text-lg"><p>Clock</p></Link>
      <Link to="/tictactoe" className="hover:text-blue-800 text-lg mr-4"><p>Tic Tac Toe</p></Link>
    </div>
  )
}

export default Header;