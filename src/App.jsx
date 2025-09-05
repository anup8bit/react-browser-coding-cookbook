import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './Components/TicTacToe'
import GridPageLayout from './Components/GridPageLayout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import DragDrop from './Components/DragDrop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<GridPageLayout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/drag-drop" element={<DragDrop />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
