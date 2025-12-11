import { useState } from 'react'

export default function Composer({ onSend }) {
  const [text, setText] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onSend(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSend} className="flex gap-2">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type a message"
        className="flex-1 p-2 border rounded"
      />
      <button className="px-4 py-2 bg-green-600 text-white rounded" type="submit">Send</button>
    </form>
  )
}
