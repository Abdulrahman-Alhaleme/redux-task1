import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Counter } from './features/counter/Counter';
import Bank from './pages/Bank';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      <Bank/>
    </>
  )
}

export default App
