import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tracking from "./pages/Tracking";
import Admin from "./pages/Admin";
import History from "./pages/History";


function App(){


return(


<BrowserRouter>


<Routes>



<Route path="/" element={<Home/>}/>


<Route path="/register" element={<Register/>}/>


<Route path="/login" element={<Login/>}/>


<Route path="/dashboard" element={<Dashboard/>}/>


<Route path="/tracking" element={<Tracking/>}/>


<Route path="/history" element={<History/>}/>


<Route path="/admin" element={<Admin/>}/>



</Routes>



</BrowserRouter>


)


}


export default App;