import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from './components/Navbar'
import MasterLayout from './components/MasterLayout'
import Recent from './components/Recent'
import All from './components/All'
import Incomplete from './components/Incomplete'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MasterLayout />} >
            <Route index element={<Recent />} />
            <Route path="all" element={<All />} />
            <Route path="incomplete" element={<Incomplete />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
