import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Place from './pages/Place'

function App() {
  const [count, setCount] = useState(0)
  const [walletOpen, setwalletOpen] = useState(false)

  const wallet = () => {
    setwalletOpen(true)
    console.log(walletOpen)
}

  const close = () => {
    setwalletOpen(false)
    console.log(walletOpen)
  }

  return (
    <>
      
      <Router>
        <Nav onClick={wallet} close={close} x={walletOpen}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Place />} />
        </Routes>
      </Router>
    
    </>
  )
}

export default App
