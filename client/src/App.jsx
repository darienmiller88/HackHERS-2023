import { useState, useEffect } from 'react'
import  styles from './App.module.scss'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from './pages/Landing/Landing'
import Signin from "./pages/Signin/Signin"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/"       element={<Landing />} />
            <Route exact path="/signin" element={<Signin />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
