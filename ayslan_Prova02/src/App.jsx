import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/Users'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Users></Users> */}
      <Login></Login>
    </>
  )
}

export default App
