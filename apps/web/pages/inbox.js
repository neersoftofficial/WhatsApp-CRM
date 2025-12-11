import dynamic from 'next/dynamic'
const ChatWindow = dynamic(() => import('../components/ChatWindow'), { ssr: false })

export default function Inbox() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded shadow">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Inbox</h2>
        </div>
        <div className="p-4">
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}
