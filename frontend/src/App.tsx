import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE || ''
    fetch(`${base}/api/hello`)
      .then(r => r.json())
      .then(d => setMessage(d.message))
      .catch(e => setMessage(String(e)))
  }, [])

  return (
    <div style={{ padding: 24 }}>
      <h1>{message}</h1>
      <p>React → Python API の疎通OKなら "Hello from Python" が表示されます。</p>
    </div>
  )
}

export default App
