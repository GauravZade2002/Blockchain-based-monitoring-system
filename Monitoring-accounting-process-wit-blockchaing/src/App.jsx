import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div>
        <h1>This is front end part of our website</h1>
      </div>
    </>
  )
}

export default App
