import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from './Notes/Signup'
import Signin from './Notes/Signin'
import Chat from './components/Chat'
import SetAvatar from "./Notes/SetAvatar";
function App(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/"  element={<Chat/>}/>
        <Route path="/signin"  element={<Signin/>}/>
        <Route path='/setAvatar'  element={<SetAvatar/>} />
        
        
    </Routes>
    </BrowserRouter>
    )
}

export default App;