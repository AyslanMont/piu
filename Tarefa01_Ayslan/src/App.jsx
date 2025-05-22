import { useState } from 'react'

import './App.css'
import Gallery from './components/Gallery'

function App() {
  const [tema, setTema] = useState("light")

function mudaTema() {
  if (tema === "light") {
    setTema("dark");
  } else {
    setTema("light");
  }
}

  return (
    <div className={tema}>
      <button onClick={mudaTema}>Mudar Tema</button>
      <Gallery></Gallery>
    </div>
  )
}

export default App
