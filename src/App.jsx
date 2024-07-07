import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <container className="relative w-full py-4 h-screen flex justify-center">
      <NavBar />
    </container>
  )
}

export default App
