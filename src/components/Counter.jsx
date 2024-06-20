import React, {useState} from 'react'

function Counter() {
  let [count, setCount] = useState(0)

  const increment = () => {
    setCount(++count)
  }

  const decrement = () => {
    setCount(--count)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
