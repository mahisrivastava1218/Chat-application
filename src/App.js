import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from './Notes/Signup'
import Signin from './Notes/Signin'
import Chat from './components/Chat'
function App(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/chat"  element={<Chat/>}/>
        <Route path="/signin"  element={<Signin/>}/>
        
        
    </Routes>
    </BrowserRouter>
    )
}

export default App;