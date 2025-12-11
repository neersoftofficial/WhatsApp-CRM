import Composer from './Composer'
import { useState, useRef, useEffect } from 'react'

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, from: 'contact', text: 'Hi, is this WhatsApp CRM?' },
    { id: 2, from: 'agent', text: 'Yes — how can I help?' },
  ])

  const listRef = useRef(null)

  useEffect(() => {
    // auto-scroll to bottom when messages change
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages])

  const send = (text) => {
    if (!text) return
    const next = { id: Date.now(), from: 'agent', text }
    setMessages(prev => [...prev, next])
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div ref={listRef} className="h-64 p-4 overflow-auto bg-white">
        {messages.map(m => (
          <div key={m.id} className={`mb-3 ${m.from === 'agent' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded ${m.from === 'agent' ? 'bg-green-100' : 'bg-gray-100'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t bg-gray-50">
        <Composer onSend={send} />
      </div>
    </div>
  )
}
