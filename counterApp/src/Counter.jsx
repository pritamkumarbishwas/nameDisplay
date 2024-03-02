import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  const handleButtonClick = (operation) => {
    if (operation === 'increment') {
      setCount(prevCount => prevCount + 1);
    } else if (operation === 'decrement') {
      setCount(prevCount => prevCount - 1);
    }
  }

  return (
    <>
      <div className='card'>
        <h3>Count: {count}</h3>
        <button onClick={() => handleButtonClick("increment")}>Increment</button>
        <button onClick={() => handleButtonClick("decrement")}>Decrement</button>
      </div>
    </>
  )
}

export default Counter
