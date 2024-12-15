import { useState } from 'react'
import './App.css'
import HomePage from './homePage'
import About from './About'
import EmailButton from './Email'
import Confetti from './Confetti'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About/>
      <EmailButton/>
      {/* <Confetti/> */}
    </>
  )
}

export default App
