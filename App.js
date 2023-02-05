import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { AuthContext } from './context/Auth.context.js';
import Login from './Login';
import Just from "./Justindex.js";
import Home from './Home';

const App = () => {
  const { state } = useContext(AuthContext);

return(
  <BrowserRouter>

  <div>
    <Link to="/Home">Home</Link> <br></br>
    <Link to="/Login">Login</Link>

    <Routes>
    <Route exact path="/" element={<Just></Just>}></Route> 
      <Route  path="/Home" element={<Home></Home>}></Route> 
      <Route  path="/Login" element={<Login></Login>}> </Route>

    
    </Routes>
  </div>
  </BrowserRouter>
)

}

export default App;