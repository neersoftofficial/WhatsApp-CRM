import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl w-full p-8">
        <h1 className="text-3xl font-bold mb-4">WhatsApp CRM — Web</h1>
        <p className="mb-6">Starter UI. Open the inbox to test chat components.</p>
        <div className="flex gap-3">
          <Link href="/inbox"><a className="px-4 py-2 rounded bg-green-600 text-white">Open Inbox</a></Link>
          <a className="px-4 py-2 rounded border" href="/api/wa/qr">Get QR (placeholder)</a>
        </div>
      </div>
    </div>
  )
}
