import { useState } from "react"

function App() {
  const [count, setCount] = useState(-1)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
