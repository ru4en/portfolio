import { useState } from 'react'
import './App.css'
import AppRouter from './routes/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
          <body>
            <AppRouter />
          </body>
      </div>
    </>
  )
}

export default App
