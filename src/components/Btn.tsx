import { useState } from 'react'

const Btn = () => {
  const [count, setCount] = useState(0);
  const [showEmoji, setShowEmoji] = useState(false)

  const handleClick = () => {
    setCount(count + 1)
    setShowEmoji(true)
    setTimeout(() => setShowEmoji(false), 1000)
  }

  return (
    <>
      <button onClick={handleClick}>
        It's lit x {count} {showEmoji && <span >🔥</span>}
      </button>
    </>
  )
}

export default Btn
