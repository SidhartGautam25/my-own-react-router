import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Router from './components/Route'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  //npm create vite test-vite-app2 -- --template react   for craeting react project in present folder

  

  return (
    <>
    <Navbar/>
    <Router path="/" component={Home}/>
    <Router path="/about" component={About}/>
    <Router path="/contacts" component={Contact}/>
    
      
    </>
  )
}

export default App
