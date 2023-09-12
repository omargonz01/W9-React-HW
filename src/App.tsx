import { useState } from 'react'
import Btn from "./components/Btn"
import Nav from "./components/Nav"
import Card from './components/Card'

import './App.css'

function App() {
  const [] = useState(0)

  return (
    <>
      <Nav/>
      <h1 className="heading1">You Have Arrived at My First React Session. Nice.</h1>
      <Btn/>
        <p>
          Hit that there 👆 button my G
        </p>
        <h6>(Then just wait like 1 sec and hit it again)</h6>
      <Card/>
    </>
  )
}

export default App
