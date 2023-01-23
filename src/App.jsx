import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import MainComponents from './components/MainComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <MainComponents />
        <Footer />
    </div>
  )
}

export default App
