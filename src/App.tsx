import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import { Container } from '@/components/elements/Container'

import './globals.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="text-xl" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Container>
      <h1 className="text-xl">Vite + React</h1>
      <div className="bg-yellow-400 text-4xl">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
