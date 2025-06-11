import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicks from './components/Clicks' 
import Carros from './components/Carros'

function App() {

  return (
    <>
      <Clicks></Clicks>
      <Carros></Carros>
    </>
  )
}

export default App
