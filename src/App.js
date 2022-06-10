import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Components/registerComponent';
import Login from './Components/loginComponent';
import Home from './Components/homePage';
import Logout from './Components/logoutComponents';
import GetUser from './Components/getUser';
function App(){
    return(
        <div className="App">
            <Router>
                <Routes>


                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="/getonlineusers" element={<GetUser />}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default App;